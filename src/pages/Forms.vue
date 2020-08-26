<template>
  <div>

    <div class="container-fluid">
      <page-header title="Forms"></page-header>
      <div class="row">
        <div class="col-lg-6">

          <panel type="panel-red" :footer=true>
            <h3 slot="header">Default Form</h3>
            <form role="form">

              <div class="form-group">
                <label>Text Input</label>
                <input class="form-control">
                <p class="help-block">Example block-level help text here.</p>
              </div>

              <div class="form-group">
                <label>Rounded Input</label>
                <input class="form-control rounded">

              </div>

              <div class="form-group">
                <label>Text Input with Placeholder</label>
                <input class="form-control" placeholder="Enter text">
              </div>

              <div class="form-group">
                <label>Static Control</label>
                <p class="form-control-static">email@example.com</p>
              </div>

              <div class="form-group">
                <label>File input</label>
                <input type="file">
              </div>

              <div class="form-group">
                <label>Text area</label>
                <textarea class="form-control" rows="3"></textarea>
              </div>

              <div class="form-group">
                <label>Checkboxes</label>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="">Checkbox 1
                  </label>
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="">Checkbox 2
                  </label>
                </div>
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="">Checkbox 3
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label>Inline Checkboxes</label>
                <label class="checkbox-inline">
                  <input type="checkbox">1
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox">2
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox">3
                </label>
              </div>

              <div class="form-group">
                <label>Radio Buttons</label>
                <div class="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"
                           checked>Radio 1
                  </label>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">Radio
                    2
                  </label>
                </div>
                <div class="radio">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">Radio
                    3
                  </label>
                </div>
              </div>

              <div class="form-group">
                <label>Inline Radio Buttons</label>
                <label class="radio-inline">
                  <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline1"
                         value="option1" checked>1
                </label>
                <label class="radio-inline">
                  <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline2"
                         value="option2">2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline3"
                         value="option3">3
                </label>
              </div>

              <div class="form-group">
                <label>Selects</label>
                <select class="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <div class="form-group">
                <label>Multiple Selects</label>
                <select multiple class="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>


            </form>
            <div slot="footer">


              <button class="btn btn-panel rounded">Cancel</button>
              <button class="btn btn-panel pull-right rounded">Save</button>

            </div>

          </panel>
          <panel type="panel-primary">
            <h3 slot="header">Horizontal Form</h3>
            <form class="form-horizontal">
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
              </div>
              <div class="form-group">
                <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword3"
                         placeholder="Password">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"> Remember me
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button type="submit" class="btn btn-default">Sign in</button>
                </div>
              </div>
            </form>

          </panel>
        </div>

        <div class="col-lg-6">
          <panel type="panel-yellow">
            <h3 slot="header">Disabled Form States</h3>

            <form role="form">

              <fieldset disabled>

                <div class="form-group">
                  <label for="disabledSelect">Disabled input</label>
                  <input class="form-control" id="disabledInput" type="text"
                         placeholder="Disabled input" disabled>
                </div>

                <div class="form-group">
                  <label for="disabledSelect">Disabled select menu</label>
                  <select id="disabledSelect" class="form-control">
                    <option>Disabled select</option>
                  </select>
                </div>

                <div class="checkbox">
                  <label>
                    <input type="checkbox">Disabled Checkbox
                  </label>
                </div>

                <button type="submit" class="btn btn-primary">Disabled Button</button>

              </fieldset>

            </form>
          </panel>

          <panel type="panel-green">
            <h3 slot="header">Form Validation</h3>

            <form role="form">

              <div class="form-group has-success">
                <label class="control-label" for="inputSuccess">Input with success</label>
                <input type="text" class="form-control" id="inputSuccess">
              </div>

              <div class="form-group has-warning">
                <label class="control-label" for="inputWarning">Input with warning</label>
                <input type="text" class="form-control" id="inputWarning">
              </div>

              <div class="form-group has-error">
                <label class="control-label" for="inputError">Input with error</label>
                <input type="text" class="form-control" id="inputError">
              </div>


            </form>
          </panel>

          <panel type="panel-orange">
            <h3 slot="header">Input Groups</h3>

            <form role="form">

              <div class="form-group input-group">
                <span class="input-group-addon">@</span>
                <input type="text" class="form-control" placeholder="Username">
              </div>

              <div class="form-group input-group">
                <input type="text" class="form-control">
                <span class="input-group-addon">.00</span>
              </div>

              <div class="form-group input-group">
                <span class="input-group-addon"><i class="fa fa-eur"></i></span>
                <input type="text" class="form-control" placeholder="Font Awesome Icon">
              </div>

              <div class="form-group input-group">
                <span class="input-group-addon">$</span>
                <input type="text" class="form-control">
                <span class="input-group-addon">.00</span>
              </div>

              <div class="form-group input-group">
                <input type="text" class="form-control">
                <span class="input-group-btn"><button class="btn btn-default" type="button"><i
                  class="fa fa-search"></i></button></span>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <div class="input-group">
                                    <span class="input-group-btn">
                                    <button class="btn btn-primary " type="button">Go!</button>
                                </span>
                      <input type="text" class="form-control" placeholder="Input with Button">
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <div class="input-group">
                                    <span class="input-group-btn">
                                    <button class="btn btn-primary rounded-left" type="button">Go!</button>
                                </span>
                      <input type="text" class="form-control"
                             placeholder="Input with Rounded Button">
                    </div>
                  </div>
                </div>

              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Input with Button">
                      <span class="input-group-btn">
                                                <button class="btn btn-blue" type="button">Go!</button>
                                            </span>

                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <div class="input-group">
                      <input type="text" class="form-control"
                             placeholder="Input with Rounded Button">
                      <span class="input-group-btn">
                                            <button class="btn btn-green rounded-right" type="button">Go!</button>
                                            </span>

                    </div>
                  </div>
                </div>

              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group input-group">
                                      <span class="input-group-addon">
                                        <input type="checkbox" aria-label="...">
                                      </span>
                    <input type="text" class="form-control" aria-label="...">
                  </div><!-- /input-group -->
                </div><!-- /.col-lg-6 -->
                <div class="col-lg-6">
                  <div class="form-group input-group">
                                          <span class="input-group-addon">
                                            <input type="radio" aria-label="...">
                                          </span>
                    <input type="text" class="form-control" aria-label="...">
                  </div><!-- /input-group -->
                </div><!-- /.col-lg-6 -->
              </div><!-- /.row -->
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group input-group">
                    <div class="input-group-btn">
                      <button type="button" class="btn btn-orange dropdown-toggle"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action <span class="caret"></span></button>
                      <ul class="dropdown-menu">
                        <li><a href="#">Delete</a></li>
                        <li><a href="#">Save</a></li>

                        <li role="separator" class="divider"></li>
                        <li><a href="#">Cancel</a></li>
                      </ul>
                    </div><!-- /btn-group -->
                    <input type="text" class="form-control" aria-label="...">
                    <div class="input-group-btn">
                      <button type="button" class="btn btn-purple dropdown-toggle"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action <span class="caret"></span></button>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div><!-- /btn-group -->
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12">
                  <div class="form-group input-group">
                    <div class="input-group-btn">
                      <button type="button" class="btn btn-danger dropdown-toggle rounded-left"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action <span class="caret"></span></button>
                      <ul class="dropdown-menu">
                        <li><a href="#">Delete</a></li>
                        <li><a href="#">Save</a></li>

                        <li role="separator" class="divider"></li>
                        <li><a href="#">Cancel</a></li>
                      </ul>
                    </div><!-- /btn-group -->
                    <input type="text" class="form-control" aria-label="...">
                    <div class="input-group-btn">
                      <button type="button" class="btn btn-success dropdown-toggle rounded-right"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action <span class="caret"></span></button>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div><!-- /btn-group -->
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group input-group">
                    <div class="input-group-btn">
                      <button type="button" class="btn btn-yellow rounded-left">Action</button>
                      <button type="button" class="btn btn-yellow dropdown-toggle"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul class="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with segmented button dropdown"></div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group input-group">
                    <input type="text" class="form-control" aria-label="Text input with segmented button dropdown">
                    <div class="input-group-btn">
                      <button type="button" class="btn btn-teal">Action</button>
                      <button type="button" class="btn btn-teal dropdown-toggle rounded-right"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="caret"></span> <span class="sr-only">Toggle Dropdown</span>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-right">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </panel>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->

  </div>
</template>
