let $latest_serms=$("#latest-serms");for(let a=sermons.length-3;a<sermons.length;a++){$("#audio_controls").attr("style","");let b=`
            <div class="single-sermons">
                <div class="sermons-content d-flex align-items-center">
                    <div class="sermons-thumbnail bg-img l-sermons" style="background-image: url(${sermons[a].background_image});"></div>
                        <div class="sermons-text">
                            <a href="#">
                                <h6>${sermons[a].title}</h6>
                            </a>
                            <p>By ${sermons[a].pastor}</p>
                            <p class="date"></p>
                            <p>${sermons[a].content_snippet}</p>
                        </div>
                    </div>
                    <!-- Audio Player -->
                    <div class="sermons-audio-player d-flex align-items-center">
                    ${sermons[a].audio_or_video_url?`<audio preload="auto" controls id="audio_controls">
                        <source src=${sermons[a].audio_or_video_url}>
                    </audio>`:""}
                    ${sermons[a].text_content?`<div class="see-more-btn">
                        <a href="sermons.html" type="button">See More</a>
                    </div>`:""}
                </div>
            </div>`;$latest_serms.append(b)}$(window).on("shown.bs.modal",function(){let a=document.querySelector("#scrollUp");a.style.display="none"});