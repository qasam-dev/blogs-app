import styled from "styled-components";

const Container = ({ children }) => {
    return <MainContainer>{children}</MainContainer>;
};

export default Container;

const MainContainer = styled.div`
    width: 100%;
    max-width: 1366px;
    padding:0 12px;
    margin: 0 auto;

    @media (max-width: 1367px) {
        max-width: 1260px;
          padding:0 8px;
    }
    @media (max-width: 1024px) {
        max-width: 900px;
    }
    
    @media (max-width: 768px) {
        max-width: 600px;
        padding: 0 12px;
    }

    @media (max-width: 480px) {
        max-width: 100%;
        padding: 0 8px;
    }
`;
