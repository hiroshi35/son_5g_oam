<template>
    <div>
        <div class="container-fluid">
            <div class="row container-margin">
                <div class="col-md-12 inbox">
                    <panel type="panel-white right-angular">
                        <div slot="header">
                            <button class="btn btn-green rounded"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                            <div class="btn-group btn-group-margin" role="group">
                                <button type="button" class="btn btn-blue rounded-left"><i class="fa fa-reply" aria-hidden="true"></i></button>

                                <button type="button" class="btn btn-blue rounded-right"><i class="fa fa-reply-all" aria-hidden="true"></i></button>
                            </div>
                            <div class="btn-group btn-group-margin" role="group">
                                <button type="button" class="btn btn-red rounded-left"><i class="fa fa-trash-o" aria-hidden="true"></i></button>

                                <button type="button" class="btn btn-yellow rounded-right"><i class="fa fa-flag" aria-hidden="true"></i></button>
                            </div>
                            <button class="btn btn-gray rounded pull-right"><i class="fa fa-cog" aria-hidden="true"></i></button>

                        </div>
                        <div class="row">
                            <div class="col-md-3 margin-bottom-15">
                                <h5>FOLDERS</h5>
                                <div class="list-group sc-list-group">
                                    <a href="#" class="list-group-item"><i class="fa fa-inbox" aria-hidden="true"></i> INBOX <span class="badge nav-badge pull-right bg-red">2</span></a>
                                    <a href="#" class="list-group-item"><i class="fa fa-star-o" aria-hidden="true"></i> FAVORITE <span class="badge nav-badge pull-right bg-teal">1</span></a>
                                    <a href="#" class="list-group-item"><i class="fa fa-flag-o" aria-hidden="true"></i> SPAM <span class="badge nav-badge pull-right bg-blue">2</span></a>
                                    <a href="#" class="list-group-item"><i class="fa fa-trash-o" aria-hidden="true"></i> TRASH <span class="badge nav-badge pull-right">4</span></a>
                                </div>

                                <h5>CATEGORIES</h5>
                                <div class="list-group sc-list-group">
                                    <a href="#" class="list-group-item"> WORK <span class="badge nav-badge pull-right bg-blue">3</span></a>
                                    <a href="#" class="list-group-item"> SOCIAL <span class="badge nav-badge pull-right bg-yellow">1</span></a>
                                    <a href="#" class="list-group-item"> DOCUMENTS <span class="badge nav-badge pull-right bg-blue-sky">4</span></a>
                                    <a href="#" class="list-group-item"> CLIENTS <span class="badge nav-badge pull-right bg-purple">4</span></a>
                                    <a href="#" class="list-group-item"> FAMILY <span class="badge nav-badge pull-right bg-moss">4</span></a>
                                </div>
                            </div>
                            <div class="col-md-9">
                                <div class="row mail-header">
                                    <div class="col-md-10">
                                        <img class="img-circle avatar margin-right-5 pull-left" src="/static/imgs/avatar.jpg" width="50px" height="50px">
                                        <span class="pull-left margin-top-5">From <strong>John Doe</strong>: <a href="#"><small>john@doe.com</small></a> <br>
                                        <small>Subject:</small> <strong>New Issue</strong></span>
                                    </div>
                                    <div class="col-md-2 mail-info">
                                        <div class="margin-top-5">
                                            <div class="badge nav-badge bg-blue pull-right">work</div>
                                            <br>
                                            <div class="date pull-right"><small>2 hours ago</small></div>
                                        </div>
                                    </div>

                                </div>
                                <div class="divider">
                                </div>
                                <div class="col-md-12">
                                    <p>Hello <strong>John</strong></p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores dolore doloribus ducimus earum, eveniet harum illo modi possimus quis quo rem reprehenderit sapiente sequi similique sit suscipit, voluptate voluptatum.</p>
                                    <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur</a> adipisicing elit. Doloremque iusto mollitia recusandae? A asperiores consequatur dolorum eveniet illum, iusto labore magnam nam nobis, non nostrum nulla quaerat quis ullam voluptatibus!
                                        Lorem <a href="#">ipsum</a> dolor sit amet, consectetur adipisicing elit. Id placeat provident quasi. Deleniti eaque in nulla perferendis quidem quod vel. Aperiam deserunt eveniet excepturi ipsam iusto laudantium odit possimus? Eveniet?
                                    </p>
                                    <div class="divider"></div>
                                    <small><i class="fa fa-paperclip" aria-hidden="true"></i> 2 attachments - <a href="#">Download All</a> | <a href="#">View all</a></small>
                                    <div class="list-group sc-list-group">
                                        <div href="#" class="list-group-item"><i class="fa fa-file-text" aria-hidden="true"></i> tasks.doc  <small class="pull-right"><a href="#">Download </a> | <a href="#">View</a></small></div>
                                        <div href="#" class="list-group-item"><i class="fa fa-picture-o" aria-hidden="true"></i> image.jpg <small class="pull-right"><a href="#">Download </a> | <a href="#">View</a></small></div>

                                    </div>
                                    <div class="divider"></div>
                                    <div class="row">
                                        <div class="col-md-12 reply">
                                            <textarea name="reply" id="reply" rows="3" placeholder="Click here to Reply"></textarea>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </panel>
                </div>
            </div>
        </div>
        <!-- /.container-fluid -->
    </div>
</template>
