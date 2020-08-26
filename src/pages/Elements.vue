<template>
  <div class="bootstrap-elements">
    <div class="container-fluid">
      <page-header title="Bootstrap Elements"></page-header>
      <div class="row">
        <div class="col-lg-12">
          <panel type="panel-yellow">

            <h3 slot="header">Button Sizes</h3>
            <h4>Large</h4>
            <p>
              <button type="button" class="btn btn-lg btn-gray margin-bottom-10">Gray</button>
              <button type="button" class="btn btn-lg btn-blue margin-bottom-10">Blue</button>
              <button type="button" class="btn btn-lg btn-green margin-bottom-10">Green</button>
              <button type="button" class="btn btn-lg btn-yellow margin-bottom-10">Yellow</button>
              <button type="button" class="btn btn-lg btn-red margin-bottom-10">Red</button>
              <button type="button" class="btn btn-lg btn-teal margin-bottom-10">Teal</button>

            </p>
            <div class="divider"></div>
            <h4>Default</h4>
            <p>
              <button type="button" class="btn btn-gray margin-bottom-10">Gray</button>
              <button type="button" class="btn btn-blue margin-bottom-10">Blue</button>
              <button type="button" class="btn btn-green margin-bottom-10">Green</button>
              <button type="button" class="btn btn-yellow margin-bottom-10">Yellow</button>
              <button type="button" class="btn btn-red margin-bottom-10">Red</button>
              <button type="button" class="btn btn-teal margin-bottom-10">Teal</button>

            </p>
            <div class="divider"></div>
            <h4>Small</h4>
            <p>
              <button type="button" class="btn btn-sm btn-gray margin-bottom-10">Gray</button>
              <button type="button" class="btn btn-sm btn-blue margin-bottom-10">Blue</button>
              <button type="button" class="btn btn-sm btn-green margin-bottom-10">Green</button>
              <button type="button" class="btn btn-sm btn-yellow margin-bottom-10">Yellow</button>
              <button type="button" class="btn btn-sm btn-red margin-bottom-10">Red</button>
              <button type="button" class="btn btn-sm btn-teal margin-bottom-10">Teal</button>

            </p>
            <div class="divider"></div>
            <h4>Extra Small</h4>
            <p>
              <button type="button" class="btn btn-xs btn-gray margin-bottom-10">Gray</button>
              <button type="button" class="btn btn-xs btn-blue margin-bottom-10">Blue</button>
              <button type="button" class="btn btn-xs btn-green margin-bottom-10">Green</button>
              <button type="button" class="btn btn-xs btn-yellow margin-bottom-10">Yellow</button>
              <button type="button" class="btn btn-xs btn-red margin-bottom-10">Red</button>
              <button type="button" class="btn btn-xs btn-teal margin-bottom-10">Teal</button>

            </p>
          </panel>
        </div>
        <div class="col-lg-12">
          <panel type="panel-orange">

            <h3 slot="header">Button Styles</h3>
            <h4>Rounded</h4>
            <p>
              <button type="button" class="btn btn-gray rounded margin-bottom-10">GRAY</button>
              <button type="button" class="btn btn-blue rounded margin-bottom-10">BLUE</button>
              <button type="button" class="btn btn-green rounded margin-bottom-10">GREEN</button>
              <button type="button" class="btn btn-purple rounded margin-bottom-10">PURPLE</button>
              <button type="button" class="btn btn-red rounded margin-bottom-10">RED</button>
              <button type="button" class="btn btn-yellow rounded margin-bottom-10">YELLOW</button>
              <button type="button" class="btn btn-teal rounded margin-bottom-10">TEAL</button>
              <button type="button" class="btn btn-orange rounded margin-bottom-10">ORANGE</button>

            </p>
            <div class="divider"></div>
            <h4>Outlined + Rounded</h4>
            <p>
              <button type="button" class="btn btn-outlined-default rounded margin-bottom-10">DEFAULT</button>
              <button type="button" class="btn btn-outlined-blue rounded margin-bottom-10">BLUE</button>
              <button type="button" class="btn btn-outlined-green rounded margin-bottom-10">GREEN</button>
              <button type="button" class="btn btn-outlined-teal rounded margin-bottom-10">TEAL</button>
              <button type="button" class="btn btn-outlined-red rounded margin-bottom-10">RED</button>
              <button type="button" class="btn btn-outlined-purple rounded margin-bottom-10">PURPLE</button>
              <button type="button" class="btn btn-outlined-orange rounded margin-bottom-10">ORANGE</button>

            </p>
            <div class="divider"></div>
            <h4>Right-Angular</h4>
            <p>
              <button type="button" class="btn btn-gray right-angular margin-bottom-10">GRAY</button>
              <button type="button" class="btn btn-blue right-angular margin-bottom-10">BLUE</button>
              <button type="button" class="btn btn-green right-angular margin-bottom-10">GREEN</button>
              <button type="button" class="btn btn-purple right-angular margin-bottom-10">PURPLE</button>
              <button type="button" class="btn btn-red right-angular margin-bottom-10">RED</button>
              <button type="button" class="btn btn-yellow right-angular margin-bottom-10">YELLOW</button>
              <button type="button" class="btn btn-teal right-angular margin-bottom-10">TEAL</button>
              <button type="button" class="btn btn-orange right-angular margin-bottom-10">ORANGE</button>

            </p>
            <div class="divider"></div>
            <h4>Outlined + Right-Angular</h4>
            <p>
              <button type="button" class="btn btn-outlined-default right-angular margin-bottom-10">DEFAULT</button>
              <button type="button" class="btn btn-outlined-blue right-angular margin-bottom-10">BLUE</button>
              <button type="button" class="btn btn-outlined-green right-angular margin-bottom-10">GREEN</button>
              <button type="button" class="btn btn-outlined-teal right-angular margin-bottom-10">TEAL</button>
              <button type="button" class="btn btn-outlined-red right-angular margin-bottom-10">RED</button>
              <button type="button" class="btn btn-outlined-purple right-angular margin-bottom-10">PURPLE</button>
              <button type="button" class="btn btn-outlined-orange right-angular margin-bottom-10">ORANGE</button>
            </p>
          </panel>
        </div>

      </div>

      <div class="row">
        <div class="col-md-12">
          <panel type="panel-red">
            <h3 slot="header">Button Colors</h3>
            <h4>Bootstrap Default</h4>
            <p>
              <button type="button" class="btn btn-default right-angular margin-bottom-10">Default</button>
              <button type="button" class="btn btn-primary right-angular margin-bottom-10">Primary</button>
              <button type="button" class="btn btn-success right-angular margin-bottom-10">Success</button>
              <button type="button" class="btn btn-info right-angular margin-bottom-10">Info</button>
              <button type="button" class="btn btn-warning right-angular margin-bottom-10">Warning</button>
              <button type="button" class="btn btn-danger right-angular margin-bottom-10">Danger</button>
              <button type="button" class="btn btn-link right-angular margin-bottom-10">Link</button>
            </p>
            <div class="divider"></div>
            <h4>Custom Colors</h4>
            <p>
              <button type="button" class="btn btn-gray right-angular margin-bottom-10">GRAY</button>
              <button type="button" class="btn btn-blue right-angular margin-bottom-10">BLUE</button>
              <button type="button" class="btn btn-green right-angular margin-bottom-10">GREEN</button>
              <button type="button" class="btn btn-purple right-angular margin-bottom-10">PURPLE</button>
              <button type="button" class="btn btn-red right-angular margin-bottom-10">RED</button>
              <button type="button" class="btn btn-yellow right-angular margin-bottom-10">YELLOW</button>
              <button type="button" class="btn btn-teal right-angular margin-bottom-10">TEAL</button>
              <button type="button" class="btn btn-orange right-angular margin-bottom-10">ORANGE</button>
              <button type="button" class="btn btn-brown right-angular margin-bottom-10">BROWN</button>
              <button type="button" class="btn btn-stone right-angular margin-bottom-10">STONE</button>
              <button type="button" class="btn btn-mist right-angular margin-bottom-10">MIST</button>
              <button type="button" class="btn btn-moss right-angular margin-bottom-10">MOSS</button>
              <button type="button" class="btn btn-sky right-angular margin-bottom-10">SKY</button>
              <button type="button" class="btn btn-pink right-angular margin-bottom-10">PINK</button>
              <button type="button" class="btn btn-blue-sky right-angular margin-bottom-10">BLUE SKY</button>
              <button type="button" class="btn btn-strawberry right-angular margin-bottom-10">STRAWBERRY</button>
              <button type="button" class="btn btn-blueberry right-angular margin-bottom-10">BLUEBERRY</button>
            </p>
            <div class="divider"></div>
            <h4>Custom Colors (Outlined)</h4>
            <p>
              <button type="button" class="btn btn-outlined-default right-angular margin-bottom-10">GRAY</button>
              <button type="button" class="btn btn-outlined-blue right-angular margin-bottom-10">BLUE</button>
              <button type="button" class="btn btn-outlined-green right-angular margin-bottom-10">GREEN</button>
              <button type="button" class="btn btn-outlined-teal right-angular margin-bottom-10">TEAL</button>
              <button type="button" class="btn btn-outlined-red right-angular margin-bottom-10">RED</button>
              <button type="button" class="btn btn-outlined-purple right-angular margin-bottom-10">PURPLE</button>
              <button type="button" class="btn btn-outlined-orange right-angular margin-bottom-10">ORANGE</button>
              <button type="button" class="btn btn-outlined-brown right-angular margin-bottom-10">BROWN</button>
              <button type="button" class="btn btn-outlined-stone right-angular margin-bottom-10">STONE</button>
              <button type="button" class="btn btn-outlined-mist right-angular margin-bottom-10">MIST</button>
              <button type="button" class="btn btn-outlined-moss right-angular margin-bottom-10">MOSS</button>
              <button type="button" class="btn btn-outlined-sky right-angular margin-bottom-10">SKY</button>
              <button type="button" class="btn btn-outlined-pink right-angular margin-bottom-10">PINK</button>
              <button type="button" class="btn btn-outlined-blue-sky right-angular margin-bottom-10">BLUE SKY</button>
              <button type="button" class="btn btn-outlined-strawberry right-angular margin-bottom-10">STRAWBERRY
              </button>
              <button type="button" class="btn btn-outlined-blueberry right-angular margin-bottom-10">BLUEBERRY</button>
            </p>
          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <panel type="panel-blueberry">
            <h3 slot="header">Button Groups</h3>
            <h4>Basic</h4>


            <div class="btn-group btn-group-margin" role="group" aria-label="...">
              <button type="button" class="btn btn-blue rounded-left">Left</button>
              <button type="button" class="btn btn-blue">Middle</button>
              <button type="button" class="btn btn-blue rounded-right">Right</button>
            </div>

            <div class="divider"></div>
            <h4>Outlined</h4>

            <div class="btn-group btn-group-outlined-margin" role="group" aria-label="...">
              <button type="button" class="btn btn-outlined-teal rounded-left">Left</button>
              <button type="button" class="btn btn-outlined-teal">Middle</button>

              <button type="button" class="btn btn-outlined-teal rounded-right">Right</button>
            </div>

            <div class="divider"></div>
            <h4>Nesting</h4>

            <div class="btn-group" role="group" aria-label="...">
              <button type="button" class="btn btn-sky rounded-left">1</button>
              <button type="button" class="btn btn-red">2</button>

              <div class="btn-group" role="group">
                <button type="button" class="btn btn-purple dropdown-toggle rounded-right" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                  Dropdown
                  <span class="caret"></span>
                </button>
                <ul class="dropdown-menu">
                  <li><a href="#">Dropdown link</a></li>
                  <li><a href="#">Dropdown link</a></li>
                </ul>
              </div>
            </div>


          </panel>
        </div>
        <div class="col-lg-6">
          <panel type="panel-pink">
            <h3 slot="header">Button Groups: Vertical variation</h3>
            <h4>Vertical Variation</h4>
            <div class="col-md-4 col-sm-4 margin-bottom-5">
              <div class="btn-group-vertical center-block" role="group" aria-label="...">
                <button type="button" class="btn btn-gray  rounded-top">GRAY</button>
                <button type="button" class="btn btn-blue ">BLUE</button>
                <button type="button" class="btn btn-green ">GREEN</button>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-purple dropdown-toggle " data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a href="#">Dropdown link</a></li>
                    <li><a href="#">Dropdown link</a></li>
                  </ul>
                </div>
                <button type="button" class="btn btn-red  rounded-bottom">RED</button>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 margin-bottom-5">
              <div class="btn-group-vertical center-block" role="group" aria-label="...">
                <button type="button" class="btn btn-gray  ">GRAY</button>
                <button type="button" class="btn btn-blue ">BLUE</button>
                <button type="button" class="btn btn-green ">GREEN</button>
                <button type="button" class="btn btn-purple ">PURPLE</button>
                <button type="button" class="btn btn-red ">RED</button>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 margin-bottom-5">
              <div class="btn-group-vertical center-block btn-group-vv-outline" role="group" aria-label="...">
                <button type="button" class="btn btn-outlined-blue  rounded-top">Button 1</button>
                <button type="button" class="btn btn-outlined-blue ">Button 2</button>
                <button type="button" class="btn btn-outlined-blue ">Button 3</button>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-outlined-blue dropdown-toggle " data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a href="#">Dropdown link</a></li>
                    <li><a href="#">Dropdown link</a></li>
                  </ul>
                </div>
                <button type="button" class="btn btn-outlined-blue rounded-bottom">Button 5</button>
              </div>
            </div>

          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-stone">
            <h3 slot="header">Button Groups: Justified button groups</h3>
            <div class="col-md-6 margin-bottom-10">

              <div class="btn-group btn-group-justified btn-group-outlined-margin" role="group" aria-label="...">
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-outlined-purple rounded-left">Left</button>
                </div>
                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-outlined-purple">Middle</button>
                </div>


                <div class="btn-group" role="group">
                  <button type="button" class="btn btn-outlined-purple rounded-right">Right</button>
                </div>
              </div>

            </div>
            <div class="col-md-6 margin-bottom-10">
              <div class="btn-group btn-group-justified" role="group" aria-label="...">
                <div class="btn-group btn-group-justified" role="group" aria-label="...">
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-green rounded-left">Left</button>
                  </div>
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-green">Middle</button>
                  </div>

                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-green rounded-right">Right</button>
                  </div>
                </div>
              </div>
            </div>
          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-teal">
            <h3 slot="header">Radio Buttons and Checkboxes</h3>
            <div class="row">
              <div class="col-md-4">
                <h3>Checkboxes</h3>
                <div>
                  <input id="checkbox-1" class="checkbox-custom" name="checkbox-1" type="checkbox" checked>
                  <label for="checkbox-1" class="checkbox-custom-label"><span></span>First Choice</label>
                </div>
                <div>
                  <input id="checkbox-2" class="checkbox-custom" name="checkbox-2" type="checkbox">
                  <label for="checkbox-2" class="checkbox-custom-label"><span></span>Second Choice</label>
                </div>
                <div>
                  <input id="checkbox-3" class="checkbox-custom" name="checkbox-3" type="checkbox">
                  <label for="checkbox-3" class="checkbox-custom-label"><span></span>Third Choice</label>
                </div>
              </div>
              <div class="col-md-4">
                <h3>Radio Buttons</h3>
                <div>
                  <input id="radio-1" class="radio-custom" name="radio-group" type="radio" checked>
                  <label for="radio-1" class="radio-custom-label"><span></span>First Choice</label>
                </div>
                <div>
                  <input id="radio-2" class="radio-custom" name="radio-group" type="radio">
                  <label for="radio-2" class="radio-custom-label"><span></span>Second Choice</label>
                </div>
                <div>
                  <input id="radio-3" class="radio-custom" name="radio-group" type="radio">
                  <label for="radio-3" class="radio-custom-label"><span></span>Third Choice</label>
                </div>
              </div>
              <div class="col-md-4">
                <h3>Contextual</h3>
                <form action="#">
                  <div class="contextual-radio">
                    <input id="radio-4" class="radio-custom" name="radio-group" type="radio" checked>
                    <label for="radio-4" class="radio-custom-label"><span></span>First Choice</label>
                  </div>
                  <div class="contextual-checkbox">
                    <input id="checkbox-4" class="checkbox-custom" name="checkbox-3" type="checkbox" checked>
                    <label for="checkbox-4" class="checkbox-custom-label"><span></span>Third Choice</label>
                  </div>
                </form>

              </div>
            </div>

          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <panel type="panel-yellow">
            <h3 slot="header">Pagination</h3>
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <h4>Default</h4>
                <nav>
                  <ul class="pagination">
                    <li>
                      <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li>
                      <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="col-md-6 col-sm-12">
                <h4>Rounded</h4>
                <nav>
                  <ul class="pagination pagination-rounded">
                    <li>
                      <a href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li>
                      <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="divider"></div>
            <h4>Disabled and Active States</h4>
            <div class="row">
              <div class="col-md-6 col-sm-12">
                <nav>
                  <ul class="pagination">
                    <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
                    </li>
                    <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li>
                      <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>

                  </ul>
                </nav>
              </div>
              <div class="col-md-6 col-sm-12">
                <nav>
                  <ul class="pagination pagination-rounded">
                    <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
                    </li>
                    <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li>
                      <a href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>

                  </ul>
                </nav>
              </div>
            </div>
            <div class="divider"></div>
            <h4>Sizing</h4>
            <div class="col-lg-4 col-sm-12">
              <nav>
                <ul class="pagination pagination-lg">
                  <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
                  </li>
                  <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-4 col-sm-12">
              <nav>
                <ul class="pagination">
                  <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
                  </li>
                  <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-4 col-sm-12">
              <nav>
                <ul class="pagination pagination-sm">
                  <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a>
                  </li>
                  <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li>
                    <a href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </panel>
        </div>
        <div class="col-lg-4">
          <panel type="panel-orange">
            <h3 slot="header">Pager</h3>
            <h4>Default</h4>
            <nav>
              <ul class="pager">
                <li><a href="#">Previous</a></li>
                <li><a href="#">Next</a></li>
              </ul>
            </nav>
            <div class="divider"></div>
            <h4>Aligned links</h4>
            <nav>
              <ul class="pager">
                <li class="previous"><a href="#"><span aria-hidden="true">&larr;</span> Older</a></li>
                <li class="next"><a href="#">Newer <span aria-hidden="true">&rarr;</span></a></li>
              </ul>
            </nav>
            <div class="divider"></div>
            <h4>Optional disabled state</h4>
            <nav>
              <ul class="pager">
                <li class="previous disabled"><a href="#"><span aria-hidden="true">&larr;</span> Older</a></li>
                <li class="next"><a href="#">Newer <span aria-hidden="true">&rarr;</span></a></li>
              </ul>
            </nav>
          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-teal">
            <h3 slot="header">Alerts</h3>
            <h4>Default Alerts</h4>
            <div class="alert alert-success">
              <strong>Well done!</strong> You successfully read this important alert message.
            </div>
            <div class="alert alert-info">
              <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
            </div>
            <div class="alert alert-warning">
              <strong>Warning!</strong> Best check yo self, you're not looking too good.
            </div>
            <div class="alert alert-danger">
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </div>
            <div class="divider"></div>
            <h4>Outlined Alerts</h4>
            <div class="alert alert-success  outlined">
              <strong>Well done!</strong> You successfully read this important alert message.
            </div>
            <div class="alert alert-info outlined">
              <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
            </div>
            <div class="alert alert-warning outlined">
              <strong>Warning!</strong> Best check yo self, you're not looking too good.
            </div>
            <div class="alert alert-danger outlined">
              <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </div>

          </panel>
        </div>


        <div class="col-md-12">
          <panel type="panel-green">
            <h3 slot="header">Dropdown menus</h3>
            <div class="row">
              <div class="col-lg-4 margin-bottom-10">
                <div class="dropdown">
                  <button class="btn btn-outlined-blue right-angular dropdown-toggle" type="button"
                          id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="true">
                    DEFAULT DROPDOWN
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 margin-bottom-10">
                <div class="dropdown">
                  <button class="btn btn-outlined-red right-angular dropdown-toggle" type="button" id="dropdownMenu2"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    CUSTOM DROPDOWN
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu custom-dropdown" aria-labelledby="dropdownMenu2">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-4 margin-bottom-10">
                <div class="dropdown">
                  <button class="btn btn-green right-angular dropdown-toggle" type="button" id="dropdownMenu3"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    CONTEXTUAL DROPDOWN
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu contextual-dropdown" aria-labelledby="dropdownMenu3">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </panel>
        </div>

        <div class="col-md-12">

          <h3>Breadcrumbs</h3>
          <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Library</a></li>
            <li class="active">Data</li>
          </ol>
          <ol class="breadcrumb">
            <li><a href="#">Home</a></li>

            <li class="active">Library</li>
          </ol>
          <ol class="breadcrumb">

            <li class="active">Data</li>
          </ol>


        </div>


        <div class="col-md-12">
          <panel type="panel-purple">
            <h3 slot="header">Progress Bars</h3>
            <div class="progress">
              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                   style="width: 60%;"><span class="sr-only">60% Complete</span>
              </div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0"
                   aria-valuemax="100" style="width: 40%"><span class="sr-only">40% Complete (success)</span>
              </div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0"
                   aria-valuemax="100" style="width: 20%"><span class="sr-only">20% Complete</span>
              </div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                   aria-valuemax="100" style="width: 60%"><span class="sr-only">60% Complete (warning)</span>
              </div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                   aria-valuemax="100" style="width: 80%"><span class="sr-only">80% Complete (danger)</span>
              </div>
            </div>
            <div class="progress">
              <div class="progress-bar progress-bar-success" style="width: 35%"><span class="sr-only">35% Complete (success)</span>
              </div>
              <div class="progress-bar progress-bar-warning" style="width: 20%"><span class="sr-only">20% Complete (warning)</span>
              </div>
              <div class="progress-bar progress-bar-danger" style="width: 10%"><span class='sr-only'>10% Complete (danger)</span>
              </div>
            </div>

            <div class="progress progress-thin">
              <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                   aria-valuemax="100" style="width: 80%"><span class="sr-only">80% Complete (danger)</span>
              </div>
            </div>

            <div class="progress progress-thin">
              <div class="progress-bar progress-bar-success" style="width: 35%"><span class="sr-only">35% Complete (success)</span>
              </div>
              <div class="progress-bar progress-bar-warning" style="width: 20%"><span class="sr-only">20% Complete (warning)</span>
              </div>
              <div class="progress-bar progress-bar-danger" style="width: 10%"><span class='sr-only'>10% Complete (danger)</span>
              </div>
            </div>
          </panel>
        </div>


        <div class="col-md-12">
          <panel type="panel-moss">
            <h3 slot="header">List groups</h3>
            <div class="row">
              <div class="col-sm-4">
                <ul class="list-group">
                  <li class="list-group-item">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Morbi leo risus</li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
              <!-- /.col-sm-4 -->
              <div class="col-sm-4">
                <div class="list-group">
                  <a href="#" class="list-group-item active">Cras justo odio</a>
                  <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
                  <a href="#" class="list-group-item">Morbi leo risus</a>
                  <a href="#" class="list-group-item">Porta ac consectetur ac</a>
                  <a href="#" class="list-group-item">Vestibulum at eros</a>
                </div>
              </div>
              <!-- /.col-sm-4 -->
              <div class="col-sm-4">
                <div class="list-group">
                  <a href="#" class="list-group-item active">
                    <h4 class="list-group-item-heading">List group item heading</h4>
                    <p class="list-group-item-text">
                      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  </a>
                  <a href="#" class="list-group-item">
                    <h4 class="list-group-item-heading">List group item heading</h4>
                    <p class="list-group-item-text">
                      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  </a>
                  <a href="#" class="list-group-item">
                    <h4 class="list-group-item-heading">List group item heading</h4>
                    <p class="list-group-item-text">
                      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                  </a>
                </div>
              </div>
              <!-- /.col-sm-4 -->
            </div>
          </panel>
        </div>


        <div class="col-md-12">
          <panel type="panel-blue-sky">
            <h3 slot="header">Wells</h3>
            <div class="well">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>
          </panel>
        </div>

        <div class="col-md-12">
          <panel type="panel-mist">
            <h3 slot="header">Grid system</h3>
            <div class="grid">
              <div class="row">
                <div class="col-md-12">
                  <div class="well">
                    .col-md-12
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="well">
                    .col-md-6
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="well">
                    .col-md-6
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="well">.col-md-4</div>
                </div>
                <div class="col-md-4">
                  <div class="well">.col-md-4</div>
                </div>
                <div class="col-md-4">
                  <div class="well">.col-md-4</div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-3">
                  <div class="well">.col-md-3</div>
                </div>
                <div class="col-md-3">
                  <div class="well">.col-md-3</div>
                </div>
                <div class="col-md-3">
                  <div class="well">.col-md-3</div>
                </div>
                <div class="col-md-3">
                  <div class="well">.col-md-3</div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-2">
                  <div class="well">.col-md-2</div>
                </div>
                <div class="col-md-2">
                  <div class="well">.col-md-2</div>
                </div>
                <div class="col-md-2">
                  <div class="well">.col-md-2</div>
                </div>
                <div class="col-md-2">
                  <div class="well">.col-md-2</div>
                </div>
                <div class="col-md-2">
                  <div class="well">.col-md-2</div>
                </div>
                <div class="col-md-2">
                  <div class="well">.col-md-2</div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-1">
                  <div class="well">.col-md-1</div>
                </div>
                <div class="col-md-1">
                  <div class="well">.col-md-1</div>
                </div>
                <div class="col-md-1">
                  <div class="well">.col-md-1</div>
                </div>
                <div class="col-md-1">
                  <div class="well">.col-md-1</div>
                </div>
                <div class="col-md-1">
                  <div class="well">.col-md-1</div>
                </div>
                <div class="col-md-1">
                  <div class="well">.col-md-1</div>
                </div>
                <div class="col-md-1">
                  <div class="well">.col-md-1</div>
                </div>
                <div class="col-md-1">
                  <div class="well">.col-md-1</div>
                </div>
                <div class="col-md-1">
                  <div class="well">.col-md-1</div>
                </div>
                <div class="col-md-1">
                  <div class="well">.col-md-1</div>
                </div>
                <div class="col-md-1">
                  <div class="well">.col-md-1</div>
                </div>
                <div class="col-md-1">
                  <div class="well">.col-md-1</div>
                </div>
              </div>
            </div>

          </panel>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {}
</script>