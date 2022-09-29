import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from 'styled-components';

const Title = () => {

    return(
        <TitleMainStyle>
            <TitleWrapper>
                <div id="divHeader">
                    <p>STARGAZER Blog Thumbnail Maker</p>
                </div>

                <div id="divGithubLink"> {/* 내 깃허브 링크 (feat. fontawesome) */}
                    <a href="https://github.com/HarenKei/Thumbnail_Maker">
                    <FontAwesomeIcon icon={faGithub} color="black" size="2x"/>
                    </a>
                </div>
            </TitleWrapper>
        </TitleMainStyle>
    )
}

const TitleMainStyle = styled.div`
    #divTitleWrapper{
        display: flex;
        flex-flow : nowrap row;
        justify-content: center;
        align-items: center;
    }

    #divHeader{
        display : flex;
        flex-flow : nowrap row;
        justify-content : center;
        align-items: center;
    }

    #divHeader > p:first-child{
        font-weight:bold;
        font-size:31pt;
    }

    #divGithubLink{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:end;
        margin-left:20px;
    }

`;

const TitleWrapper = styled.div`
    display: flex;
    flex-flow : nowrap row;
    justify-content: center;
    align-items: center;
`;

const TitleHeader = styled.div`
    display : flex;
    flex-flow : nowrap row;
    justify-content : center;
    align-items: center;

`;

export default Title;