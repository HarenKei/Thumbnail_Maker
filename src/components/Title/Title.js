import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Title.css";

const Title = () => {

    return(
        <div>
            <div id="divTitleWrapper">
                <div id="divHeader">
                    <p>STARGAZER Blog Thumbnail Maker</p>
                </div>

                <div id="divGithubLink"> {/* 내 깃허브 링크 (feat. fontawesome) */}
                    <a href="https://github.com/HarenKei/Thumbnail_Maker">
                    <FontAwesomeIcon icon={faGithub} color="black" size="2x"/>
                    </a>
                </div>
                </div>
        </div>
    )
}

export default Title;