import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from 'styled-components';

const Title = () => {

    return(
        <TitleWrapper>
            <TitleHeader>
                <p>STARGAZER Blog Thumbnail Maker</p>
            </TitleHeader>

            <TitleGitHubLink> {/* 내 깃허브 링크 (feat. fontawesome) */}
                <a href="https://github.com/HarenKei/Thumbnail_Maker">
                    <FontAwesomeIcon icon={faGithub} color="#FEFFDE" size="2x"/>
                </a>
            </TitleGitHubLink>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
    display: flex;
    flex-flow : nowrap row;
    justify-content: center;
    align-items: center;
`;

const TitleHeader = styled.div`
    font-weight: bold;
    font-size: 1.5em;
`;

const TitleGitHubLink = styled.div`
    padding-left: 20px;
`;

export default Title;