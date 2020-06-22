let d,m,modalSermons,$sermons_element=$("#sermons-container"),$audio_controls=$("#audio-controls"),$sermon_modal=$("#sermon-modal"),$app=$("#app");const pastors=[1,2,3],pastorUka=1,pastorAffiah=2,pastorDelphine=3,sermonsByPastorUka=sermons.filter(a=>a.pastor_id===pastors[0]);console.log(sermonsByPastorUka);const sermonsByPastorAffiah=sermons.filter(a=>a.pastor_id===pastors[1]);console.log(sermonsByPastorAffiah);const sermonsByPastorDelphineUka=sermons.filter(a=>a.pastor_id===pastors[2]);console.log(sermonsByPastorDelphineUka);const $pagination_element=$("#pagination");let current_page=1,rows=6;function DisplaySermons(a,b,c,d){b.empty(),d--;let e=c*d,f=a.slice(e,e+c);for(let e,g=0;g<f.length;g++){e=f[g],""===e.audio_or_video_url;let a=`
            <div class="single-sermons col-md-6">
                <div class="sermons-content d-flex align-items-center">
                    <div class="sermons-thumbnail bg-img l-sermons" style="background-image: url(${e.background_image});"></div>
                        <div class="sermons-text">
                            <a href="#">
                                <h6 id="title">${e.title}</h6>
                            </a>
                            <p id="pastor">By ${e.pastor}</p>
                            <p class="date" id="date"></p>
                            <p id="content-snippet">${e.content_snippet}</p>
                        </div>
                    </div>
                    <!-- Audio Player -->
                    <div class="sermons-audio-player d-flex align-items-center">
                    ${e.audio_or_video_url?`<audio preload="auto" controls id="audio-controls">
                        <source src=${e.audio_or_video_url}>
                    </audio>`:""}
                    ${e.text_content?`<div class="see-more-btn">
                        <a href="#" type="button" data-toggle="modal" data-id=${e.pastor_id} data-target=#${e.id} class='open-dialog'>See More</a>
                    </div>`:""}
                </div>
            </div>
            
            <div id=${e.id}  class="modal fade right" ${m=e.id} tabindex="-1" role="dialog">
                <div class="modal-dialog-full-width modal-dialog momodel modal-fluid" role="document">
                    <div class="modal-content-full-width modal-content">
                        <div class="modal-header-full-width modal-header text-center">


                        <div class="mh-bg-img" style="background-image: url(${e.background_image});">
                            <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                                <span style="font-size: 1.3em;" aria-hidden="true">&times;</span>
                            </button>
                            <div class="container h-100">
                            
                                <div class="row h-100 align-items-center">
                                    <div class="col-12 col-md-12">
                                        <div class="breadcumb-text">
                                        ${e.audio_or_video_url?`<audio preload="auto" controls id="audio-controls">
                                        <source src=${e.audio_or_video_url}>
                                    </audio>`:""}
                                            <!-- <h2>${e.title}</h2>
                                            <p>By ${e.pastor}</p> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                        <div class="modal-body">
                        <p id="content" class="align-justify">${e.text_content} </p>
                        <div id=\"app\"></div>
                        </div>
                        <div class="modal-footer" id=\"sermon-modal\">
                    
                        <button type="button" class="btn btn-default btn-modal-close" data-dismiss="modal">Back to All sermons</button>
                        </div>
                    </div>
                </div>
            </div>`;$("#audio-controls").attr("style",""),b.append(a)}}function SetupPagination(a,b,c){b.empty();let d=Math.ceil(a.length/c);for(let e,f=1;f<d+1;f++)e=PaginationButton(f,a),b.append(e)}function PaginationButton(a,b){let c=document.createElement("button");return c.innerText=a,current_page==a&&c.classList.add("active"),c.addEventListener("click",function(){current_page=a,DisplaySermons(b,$sermons_element,rows,current_page);let d=document.querySelector(".pagenumbers button.active");d.classList.remove("active"),c.classList.add("active")}),c}DisplaySermons(sermons,$sermons_element,rows,current_page),SetupPagination(sermons,$pagination_element,rows),$("body").on("hide.bs.modal",function(){$("audio").each(function(){this.pause(),this.currentTime=0})}),$(document).on("click",".open-dialog",function(){d=$(this).data("id")}),$(window).on("shown.bs.modal",function(){let a=document.querySelector("#scrollUp");a.style.display="none"});