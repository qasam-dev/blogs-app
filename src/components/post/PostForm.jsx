import { useForm } from "react-hook-form"
import { Box, Button, InputStyle, SelectStyle } from "../Elements"
import { RTE } from "./RTE"
import postService from "../../app/services/post"
import { useNavigate } from "react-router"
import { useSelector } from "react-redux"
import { useCallback, useEffect } from "react"

const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, control, setValue, getValues } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active"
    }
  });
  const navigate = useNavigate()
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? await postService.uploadFile(data.image[0]) : null;

      if (file) {
        postService.deleteFile(post.featuredImage)
      }
      const dbPost = await postService.UpdatePost(post.$id, {
        ...data,
        featureImage: file ? file.$id : null
      })
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }

    } else {
      const file = await postService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await postService.createPost({ ...data, userId: userData.$id });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  }
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]/g, "- ")
        .replace(/\s/g, "-");
    }
  }, [])
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'title') {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
      return () => subscription.unsubscribe();
    })
  }, [])
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <Box className="w-2/3 px-2">
        <InputStyle
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <InputStyle
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
      </Box>
      <div className="w-1/3 px-2">
        <InputStyle
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <Box className="w-full mb-4">
            <img
              src={postService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </Box>
        )}
        <SelectStyle
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button type="submit" className="w-full">
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  )
}

export default PostForm