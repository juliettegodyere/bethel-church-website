let $sermons_element = $('#sermons-container');
let $audio_controls = $('#audio-controls');

console.log(sermons.length);
const $pagination_element = $('#pagination');

let current_page = 1;
let rows = 6;

function DisplaySermons(sermons, wrapper, rows_per_page, page){
    wrapper.empty();
    //console.log(wrapper.innerHTML);
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedSermons = sermons.slice(start, end);

    for(let i = 0; i < paginatedSermons.length; i++){
        let sermon = paginatedSermons[i];
        if(sermon.audio_or_video_url===''){
            console.log(sermon.title + ' is not an audio sermon');
        };
        //console.log(sermon);
         let sermonContent = `
            <div class="single-sermons col-md-6">
            <div class="sermons-content d-flex align-items-center">
                <div class="sermons-thumbnail bg-img l-sermons" style="background-image: url(${sermon.background_image});"></div>
                <div class="sermons-text">
                    <a href="#">
                        <h6 id="title">${sermon.title}</h6>
                    </a>
                    <p id="pastor">By ${sermon.pastor}</p>
                    <p class="date" id="date"></p>
                    <p id="content-snippet">${sermon.content_snippet}</p>
                </div>
            </div>
            <!-- Audio Player -->
            <div class="sermons-audio-player d-flex align-items-center">
                ${sermon.audio_or_video_url ? `<audio preload="auto" controls id="audio-controls">
                    <source src=${sermon.audio_or_video_url}>
                </audio>` : ""}
                <div class="see-more-btn">
                    <a href="#" type="button" data-toggle="modal" data-target=#${sermon.title}>See More</a>
                </div>
            </div>
            </div>

            <div id=${sermon.title} class="modal fade" role="dialog">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h4 id="modal-title" class="modal-title">${sermon.title}</h4>
                </div>
                <div class="modal-body">
                <p id="content" class="align-justify">${sermon.text_content} </p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
            </div>`;
        wrapper.append(sermonContent);
    }
}

function SetupPagination (sermons, wrapper, rows_per_page){
    wrapper.empty();

    let page_count = Math.ceil(sermons.length / rows_per_page);
    for (let i = 1; i < page_count + 1; i++){
        let btn = PaginationButton(i, sermons);
        wrapper.append(btn);
    }
}

function PaginationButton ( page, sermons){
    let button = document.createElement('button');
    button.innerText = page;
    //console.log("page:", page);
    //console.log("current page:", current_page);
    if (current_page == page) {
        button.classList.add('active')};

    button.addEventListener('click', function (){
        current_page = page;
        
        DisplaySermons(sermons, $sermons_element, rows, current_page);

        let current_btn = document.querySelector('.pagenumbers button.active');
        current_btn.classList.remove('active');

        button.classList.add('active');
    });

    return button;
}

DisplaySermons(sermons, $sermons_element, rows, current_page);
SetupPagination(sermons, $pagination_element, rows);

