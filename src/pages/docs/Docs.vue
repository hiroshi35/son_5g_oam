<template>
  <div>
    <page-header title="Documentation"></page-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-teal" :header="false">
            <accordion id="accordion_docs">
              <accordion-item title='Panels' :active="true">
                <h4>Panel with heading</h4>
                <pre>&lt;panel :header=true&gt; Body... &lt;/panel&gt; or &lt;panel&gt; Body... &lt;/panel&gt; (header is set to true by default)</pre>
                <p>Usage:</p>
                <pre>&lt;panel type="panel-green" :header=true&gt;&lt;h3 slot="header"&gt;Header&lt;/h3&gt;Body...&lt;/panel&gt;</pre>
                <div class="divider"></div>
                <h4>Panel with footer</h4>
                <pre>&lt;panel :footer=true&gt; Body... &lt;/panel&gt;</pre>
                <p>Usage:</p>
                <pre>&lt;panel type="panel-green" :header=false :footer=true&gt;Body...&lt;h5 slot="footer"&gt;Footer&lt;/h5&gt;&lt;/panel&gt;</pre>
                <div class="divider"></div>
                <h4>Panel types: </h4>
                <pre>&lt;panel type="[type]"&gt; Body... &lt;/panel&gt;</pre>
                <p>Usage:</p>
                <pre>&lt;panel type="panel-primary"&gt; Body... &lt;/panel&gt;</pre>
                <ul>
                  <li>panel-primary</li>
                  <li>panel-green</li>
                  <li>panel-red</li>
                  <li>panel-yellow</li>
                  <li>panel-orange</li>
                  <li>panel-teal</li>
                  <li>panel-purple</li>
                  <li>panel-stone</li>
                  <li>panel-moss</li>
                  <li>panel-mist</li>
                  <li>panel-sky</li>
                  <li>panel-pink</li>
                  <li>panel-blue-sky</li>
                  <li>panel-strawberry</li>
                  <li>panel-blueberry</li>
                  <li>panel-gray</li>
                  <li>panel-brown</li>
                  <li>panel-white</li>
                </ul>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit Panel</pre>
              </accordion-item>
              <accordion-item title='Datatables'>
                <p><a href="https://datatables.net/">DataTables</a> is a plug-in for the jQuery Javascript library. It is a highly flexible tool, based upon the foundations of progressive enhancement, and will add advanced interaction controls to any HTML table.</p>
                <div class="divider"></div>
                <h4>HTML (DOM) sourced data</h4>
                <pre>&lt;datatable :table="true"&gt;&lt;table&gt;...&lt;/table&gt;&lt;/datatable&gt;</pre>
                <div class="divider"></div>
                <h4>Javascript sourced data</h4>
                <pre>&lt;datatable :table-data="[{title: 'Title'}, {title: 'Your'},...]" :columns="[['1', '2',...],...]"&gt;&lt;/datatable&gt;</pre>
                <div class="divider"></div>
                <h4>Options</h4>
                <pre>&lt;datatable :options="{...}"&gt;&lt;/datatable&gt;</pre>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit Datatable</pre>
              </accordion-item>
              <accordion-item title='Chart.js'>
                <p><a href="http://www.chartjs.org/">Chart.js</a> is simple yet flexible JavaScript charting for designers & developers.</p>
                <pre>&lt;chart type=&quot;type&quot; :height=&quot;height&quot; :labels=&#039;[...]&#039; :datasets=&quot;[...]&quot;&gt;&lt;/chart&gt;</pre>
                <div class="divider"></div>
                <h4>Chart Types</h4>
                <a href="http://www.chartjs.org/docs/latest/charts/">http://www.chartjs.org/docs/latest/charts/</a>
                <div class="divider"></div>
                <h4>Usage</h4>
                <pre>&lt;chart type=&quot;pie&quot; :height=&quot;75&quot; :labels=&#039;[&quot;Red&quot;,&quot;Blue&quot;,&quot;Yellow&quot;]&#039; :datasets=&quot;[{data: [300, 50, 100]}]&quot;&gt;&lt;/chart&gt;</pre>
                <div class="divider"></div>
                <h4>Options</h4>
                <pre>&lt;chart :options="{...}"&gt;&lt;/chart&gt;</pre>
                <div class="divider"></div>
                <div class="alert alert-warning">
                  Override default options with <strong>:options={}</strong>.
                </div>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit Chart</pre>
              </accordion-item>
              <accordion-item title='Chartist'>
                <p><a href="https://gionkunz.github.io/chartist-js/">Chartist</a> - Simple responsive charts.</p>
                <pre>&lt;chartist chart-height=&quot;height&quot; type=&quot;bar&quot; :data=&quot;data&quot; :options=&quot;options&quot;&gt;&lt;/chartist&gt;</pre>
                <div class="divider"></div>
                <h4>Usage</h4>
                <pre>&lt;chartist chart-height=&quot;300px&quot; type=&quot;bar&quot; :data=&quot;{labels: [...], series: [[...]]}&quot; :options=&quot;{...}&quot;&gt;&lt;/chartist&gt;</pre>
                <div class="divider"></div>
                <div class="alert alert-warning">
                  Override default options with <strong>:options={}</strong>.
                </div>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit Chartist</pre>
              </accordion-item>
              <accordion-item title='Peity'>
                <p><a href="http://benpickles.github.io/peity/">Peity</a> - progressive svg pie, donut, bar and line mini charts.</p>
                <div class="divider"></div>
                <pre>&lt;inline-chart type=&quot;[pie|donut|bar|line]&quot; :options=&quot;{...}&quot;&gt;1/2&lt;/inline-chart&gt;</pre>
                <div class="divider"></div>
                <h4>Types</h4>
                <ul>
                  <li>pie</li>
                  <li>donut</li>
                  <li>bar</li>
                  <li>line</li>
                </ul>
                <div class="divider"></div>
                <h4>Usage</h4>
                <pre>&lt;inline-chart type=&quot;donut&quot; :options=&quot;{radius:14,fill:[&#039;#fa7252&#039;,&#039;#fff4dd&#039;]}&quot;&gt;4.2/5&lt;/inline-chart&gt;</pre>
                <div class="divider"></div>
                <div class="alert alert-warning">
                  Override default options with <strong>:options={}</strong>.
                </div>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit InlineChart</pre>
              </accordion-item>
              <accordion-item title='PhotoSwipe'>
                <p><a href="http://photoswipe.com/">PhotoSwipe</a> - Responsive JavaScript Image Gallery</p>
                <div class="divider"></div>
                <pre>&lt;photo-swipe :items=&quot;[{...},...]&quot; :options=&quot;{...}&quot;&gt;&lt;/photo-swipe&gt;</pre>
                <div class="divider"></div>
                <h4>Usage</h4>
                <pre>&lt;photo-swipe :items=&quot;[{src: &#039;http/...&#039;, w: '960px', h: '960px', title: 'Title', author: 'Author'}]&quot; :options=&quot;{...}&quot;&gt;&lt;/photo-swipe&gt;</pre>
                <div class="divider"></div>
                <div class="alert alert-warning">
                  Override default options with <strong>:options={}</strong>.
                </div>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit PhotoSwipe</pre>
              </accordion-item>
              <accordion-item title='Calendar'>
                <p><a href="https://fullcalendar.io/">FullCalendar</a> -  A JavaScript event calendar. Customizable and open source.</p>
                <pre>&lt;calendar :events=&quot;events&quot;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:draggable=&quot;true&quot;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:external-events=&quot;values.externalEvents&quot;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:delete-events=&quot;true&quot;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;:add-events=&quot;true&quot;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;@eventAdded=&quot;addEvent&quot;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;@externalEventAdded=&quot;addExternalEvent&quot;<br />&gt;&lt;/calendar&gt;</pre>
                <div class="divider"></div>
                <h4>Properties & Events</h4>
                <p><strong><a href="https://fullcalendar.io/docs/event_data/events_array/">events</a></strong> - An array of Event Objects that will be displayed on the calendar.</p>
                <p><strong>externalEvents</strong> - Array of events that can be dropped onto the calendar.</p>
                <p><strong>draggable</strong> - Determines if jQuery UI draggables can be dropped onto the calendar.</p>
                <p><strong><a href="https://fullcalendar.io/docs/display/aspectRatio/">aspectRatio</a></strong> - Determines the width-to-height aspect ratio of the calendar.</p>
                <p><strong>deleteEvents</strong> - Determines if events can be deleted.</p>
                <p><strong>options</strong> - Options Object.</p>
                <p><strong>addEvents</strong> - If true, add event form will be displayed.</p>
                <p><strong>@externalEventAdded</strong> -  emitted when event is added.</p>
                <p><strong>@eventAdded</strong> -  emitted when event is dropped onto calendar.</p>
                <p><strong>onDrop & onDropExternal</strong> -  Called when a valid jQuery UI draggable has been dropped onto the calendar.</p>
                <p><strong>onResize</strong> - Called when event is resized.</p>
                <p><strong>onDropExternal</strong> - Called when external event has been dropped onto the calendar.</p>
                <div class="divider"></div>
                <div class="alert alert-warning">
                  Override default options with <strong>:options={}</strong>.
                </div>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit Calendar</pre>
              </accordion-item>
              <accordion-item title='Select2'>
                <p><a href="https://select2.org/">Select2</a> - The jQuery replacement for select boxes</p>
                <div class="alert alert-info" role="alert">
                  <p>Component supports <a href="https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events">v-model</a>.</p>
                </div>
                <div class="divider"></div>
                <pre>&lt;v-select2 :data=&quot;{...}&quot;&gt;&lt;/v-select2&gt;</pre>
                <div class="divider"></div>
                <h4>With placeholder</h4>
                <pre>&lt;v-select2 :data=&quot;{...}&quot; placeholder=&quot;Custom Placeholder&quot;&gt;&lt;/v-select2&gt;</pre>
                <div class="divider"></div>
                <h4>Disabled Search</h4>
                <pre>&lt;v-select2 :data=&quot;{...}&quot; :search=&quot;false&quot;&gt;&lt;/v-select2&gt;</pre>
                <div class="divider"></div>
                <h4>Usage</h4>
                <pre>&lt;v-select2 :data=&quot;{laravel: &#039;Laravel&#039;, gulp: &#039;Gulp&#039;, sass: &#039;Sass&#039;}&quot; placeholder=&quot;Custom Placeholder&quot; v-model=&quot;data&quot;&gt;&lt;/v-select2&gt;</pre>
                <div class="divider"></div>
                <div class="alert alert-warning">
                  Override default options with <strong>:options={}</strong>.
                </div>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit Select2</pre>
              </accordion-item>
              <accordion-item title='Color Picker'>
                <p><a href="https://farbelous.github.io/bootstrap-colorpicker/">Bootstrap Colorpicker</a> is a simple and customizable colorpicker component.</p>
                <div class="alert alert-info" role="alert">
                  <p>Component supports <a href="https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events">v-model</a>.</p>
                </div>
                <div class="divider"></div>
                <h4>With placeholder</h4>
                <pre>&lt;colorpicker placeholder=&quot;Custom Placeholder&quot;&gt;&lt;/colorpicker&gt;</pre>
                <div class="divider"></div>
                <h4>With icon</h4>
                <pre>&lt;colorpicker icon=&quot;true&quot;&gt;&lt;/colorpicker&gt;</pre>
                <div class="divider"></div>
                <h4>Usage</h4>
                <pre>&lt;colorpicker :icon=&quot;true&quot; v-model=&quot;color &quot; placeholder=&quot;Enter Color&quot;&gt;&lt;/colorpicker&gt;</pre>
                <div class="divider"></div>
                <div class="alert alert-warning">
                  Override default options with <strong>:options={}</strong>.
                </div>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit Colorpicker</pre>
              </accordion-item>
              <accordion-item title='Date/Time Picker'>
                <p><a href="http://eonasdan.github.io/bootstrap-datetimepicker/">Datepicker</a></p>
                <div class="alert alert-info" role="alert">
                  <p>Component supports <a href="https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events">v-model</a>.</p>
                </div>
                <div class="divider"></div>
                <h4>Enabling Icon</h4>
                <pre>&lt;datepicker :icon=&quot;true&quot;&gt;&lt;/datepicker&gt;</pre>
                <div class="divider"></div>
                <h4>Custom Format</h4>
                <pre>&lt;datepicker format=&quot;DD-MM-YYYY&quot;&gt;&lt;/datepicker&gt;</pre>
                <div class="divider"></div>
                <h4>Custom Icon</h4>
                <pre>&lt;datepicker :icon=&quot;true&quot; custom-icon=&#039;&lt;i class=&quot;fa fa-clock-o&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;&#039;&gt;&lt;/datepicker&gt;</pre>
                <div class="divider"></div>
                <h4>Usage</h4>
                <pre>&lt;datepicker :icon=&quot;true&quot; format=&quot;LT&quot; custom-icon=&#039;&lt;i class=&quot;fa fa-clock-o&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;&#039;&gt;&lt;/datepicker&gt;</pre>
                <div class="divider"></div>
                <div class="alert alert-warning">
                  Override default options with <strong>:options={}</strong>.
                </div>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit Datepicker</pre>
              </accordion-item>
              <accordion-item title='Tabs'>
                <h4>Usage</h4>
                <pre>&lt;tabs&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;tab title=&#039;Tab 1&#039; :selected=&quot;true&quot;&gt;&lt;h4&gt;Content of Tab 1&lt;/h4&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;/tab&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;tab title=&#039;Tab 2&#039;&gt;&lt;h4&gt;Content of Tab 2&lt;/h4&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;...<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;/tab&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;tab title=&#039;Tab 3&#039;&gt;&lt;h4&gt;Content of Tab 3&lt;/h4&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;/tab&gt;<br />&lt;/tabs&gt;</pre>
                Select active tab with <code>:selected=&quot;true&quot;</code>.
                <div class="divider"></div>
                <h4>Verical Tabs</h4>
                <pre>&lt;tabs :vertical=&quot;true&quot; :right=&quot;[true|false]&quot;&gt;&lt;/tabs&gt;</pre>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit Tabs <br>npm run unit Tab</pre>
              </accordion-item>
              <accordion-item title='Modal'>
                <strong>Modals</strong> are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.
                <pre>&lt;modal id=&quot;modal-id&quot; :show=&#039;showModal&#039; @modalClosed=&quot;showModal = false&quot;&gt;&lt;/modal&gt;</pre>
                <div class="divider"></div>
                <h4>Properties & Events</h4>
                <p><strong>show</strong></p>
                <p>If true, the modal dialog will be displayed. Pass in whatever state in your application controls this.</p>
                <p><strong>@modalClosed</strong></p>
                This event is emitted when the close button of the modal dialog is clicked or is clicked outside of the modal. Don't forget to change the state which controls the show prop.
                <div class="divider"></div>
                <h4>Small Modal</h4>
                <pre>&lt;modal id=&quot;modal-id&quot; :small=&quot;true&quot; :show=&#039;showModal&#039; @modalClosed=&quot;showModal = false&quot;&gt;&lt;/modal&gt;</pre>
                <div class="divider"></div>
                <h4>Large Modal</h4>
                <pre>&lt;modal id=&quot;modal-id&quot; :large=&quot;true&quot; :show=&#039;showModal&#039; @modalClosed=&quot;showModal = false&quot;&gt;&lt;/modal&gt;</pre>
                <div class="divider"></div>
                <h4>Usage</h4>
                <pre>&lt;button type=&quot;button&quot; class=&quot;btn btn-outlined-default right-angular &nbsp;btn-block&quot; @click=&quot;showModal = true&quot;&gt;LAUNCH MODAL&lt;/button&gt;<br />&lt;modal id=&quot;small_modal&quot; :small=true :show=&quot;showModal&quot; @modalClosed=&quot;showModal = false&quot;&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;h3 slot=&quot;title&quot;&gt;Modal Title&lt;/h3&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;p&gt;...&lt;/p&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;div slot=&quot;footer&quot;&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;button type=&quot;button&quot; class=&quot;btn btn-outlined-red right-angular&quot; @click=&quot;modal2 = false&quot;&gt;CLOSE&lt;/button&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;button type=&quot;button&quot; class=&quot;btn btn-outlined-blue right-angular&quot;&gt;SAVE&lt;/button&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &lt;/div&gt;<br />&lt;/modal&gt;</pre>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit Modal</pre>
              </accordion-item>
              <accordion-item title='Trumbowyg'>
                <p><a href="https://alex-d.github.io/Trumbowyg/">Trumbowyg</a> - A lightweight WYSIWYG editor</p>
                <div class="alert alert-info" role="alert">
                  <p>Component supports <a href="https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events">v-model</a>.</p>
                </div>
                <div class="divider"></div>
                <h4>Usage</h4>
                <pre>&lt;trumbowyg v-model=&quot;text&quot;&gt;&lt;/trumbowyg&gt;</pre>
                <div class="divider"></div>
                <h4>Overriding server path for image uploads</h4>
                <pre>&lt;trumbowyg upload-path=&quot;http/...&quot;&gt;&lt;/trumbowyg&gt;</pre>
                <div class="divider"></div>
                <div class="alert alert-warning">
                  Override default options with <strong>:options={}</strong>.
                </div>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit Trumbowyg</pre>
              </accordion-item>
              <accordion-item title='Codemirror'>
                <p><a href="http://codemirror.net/">CodeMirror</a> is a versatile text editor implemented in JavaScript for the browser.</p>
                <div class="alert alert-info" role="alert">
                  <p>Component supports <a href="https://vuejs.org/v2/guide/components.html#Form-Input-Components-using-Custom-Events">v-model</a>.</p>
                </div>
                <pre>&lt;codemirror mode=&quot;mode&quot; theme=&quot;[material|dracula|eclipse|cobalt|monokai|yeti|zenburn|twilight]&quot; v-model=&quot;code&quot;&gt;&lt;/codemirror&gt;</pre>
                <div class="divider"></div>
                <h4>Themes</h4>
                <ul>
                  <li>material</li>
                  <li>dracula</li>
                  <li>eclipse</li>
                  <li>cobalt</li>
                  <li>monokai</li>
                  <li>yeti</li>
                  <li>zenburn</li>
                  <li>twilight</li>
                </ul>
                <div class="divider"></div>
                <h4>Language modes</h4>
                <p><a href="https://codemirror.net/mode/index.html">List of every mode in the distribution.</a> Each mode is lazy loaded.</p>
                <div class="divider"></div>
                <div class="alert alert-warning">
                  Override default options with <strong>:options={...}</strong>.
                </div>
                <div class="divider"></div>
                <h4>Usage</h4>
                <pre>&lt;codemirror mode=&quot;php&quot; theme=&quot;material&quot; v-model=&quot;code&quot; @mounted=&quot;showCodeMirror = true&quot;&gt;&lt;/codemirror&gt;</pre>
              </accordion-item>
              <accordion-item title='Widget'>
                <pre>&lt;widget class-name=&quot;[widget-green|widget-blue|widget-red...]&quot; :shadow=&quot;Boolean&quot; icon=&#039;String|Html&#039; title=&quot;String&quot;&gt;body...&lt;/widget&gt;</pre>
                <div class="divider"></div>
                <h4>Class Names</h4>
                <ul>
                  <li>widget-green</li>
                  <li>widget-blue</li>
                  <li>widget-red</li>
                  <li>widget-teal</li>
                  <li>widget-yellow</li>
                  <li>widget-orange</li>
                  <li>widget-purple</li>
                  <li>widget-mist</li>
                  <li>widget-brown</li>
                  <li>widget-stone</li>
                  <li>widget-moss</li>
                  <li>widget-sky</li>
                  <li>widget-pink</li>
                  <li>widget-blue-sky</li>
                  <li>widget-blueberry</li>
                  <li>widget-strawberry</li>
                </ul>
                <div class="divider"></div>
                <h4>With Shadow</h4>
                <pre>&lt;widget :shadow=&quot;true&quot;&gt;&lt;/widget&gt;</pre>
                <div class="divider"></div>
                <h4>Usage</h4>
                <pre>&lt;widget class-name=&quot;widget-green&quot; icon=&#039;&lt;i class=&quot;fa fa-calendar&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;&#039; title=&quot;Events&quot;&gt;2&lt;/widget&gt;</pre>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit Widget</pre>
              </accordion-item>
              <accordion-item title='Accordion'>
                <h4>Usage</h4>
                <pre>&lt;accordion id=&quot;accordion-id&quot;&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;accordion-item title=&#039;Collapsible Group Item #1&#039; :active=&quot;true&quot;&gt;&lt;/accordion-item&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;accordion-item title=&#039;Collapsible Group Item #2&#039;&gt;....&lt;/accordion-item&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;accordion-item title=&#039;Collapsible Group Item #3&#039;&gt;...&lt;/accordion-item&gt;<br />&lt;/accordion&gt;</pre>
                Select active panel with <code>:active=&quot;true&quot;</code>.
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit Accordion <br>npm run unit AccordionItem</pre>
              </accordion-item>
              <accordion-item title='Carousel'>
                A slideshow component for cycling through elements, like a carousel.
                <div class="divider"></div>
                <h4>Usage</h4>
                <pre>&lt;carousel id=&quot;carousel-id&quot;&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;carousel-item img-src=&quot;/image1.jpg&quot; caption=&quot;First Caption&quot;&gt;&lt;/carousel-item&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;carousel-item img-src=&quot;/image2.jpg&quot; caption=&quot;Second Caption&quot;&gt;&lt;/carousel-item&gt;<br />&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&lt;carousel-item img-src=&quot;/image3.jpg&quot; caption=&quot;Third Caption&quot;&gt;&lt;/carousel-item&gt;<br />&lt;/carousel&gt;</pre>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit Carousel <br>npm run unit CarouselItem</pre>
              </accordion-item>
              <accordion-item title='Jumbotron'>
                A lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site.
                <pre>&lt;jumbotron title=&quot;Title&quot; img=&quot;img_path&quot;&gt;body...&lt;div slot=&quot;buttons&quot;&gt; ...&lt;/p&gt;&lt;/jumbotron&gt;</pre>
                <div class="divider"></div>
                <h4>Without image</h4>
                <pre>&lt;jumbotron title=&quot;Title&quot;&gt;body...&lt;div slot=&quot;buttons&quot;&gt; ...&lt;/p&gt;&lt;/jumbotron&gt;</pre>
                <div class="divider"></div>
                <h4>Custom Class</h4>
                <pre>&lt;jumbotron title=&quot;Title&quot; class-name=&quot;custom-class-name&quot;&gt;body...&lt;div slot=&quot;buttons&quot;&gt; ...&lt;/p&gt;&lt;/jumbotron&gt;</pre>
                <div class="divider"></div>
                <h4>Usage</h4>
                <pre>&lt;jumbotron title=&quot;Hello World&quot; img=&quot;/static/imgs/pexels-photo-235615.jpeg&quot;&gt;<br>&lt;p&gt;...&lt;/p&gt;<br>&lt;p slot=&quot;buttons&quot;&gt;<br>&lt;button class=&quot;btn btn-outlined-orange rounded&quot;&gt;Learn More&lt;/button&gt;&lt;/p&gt;<br>&lt;/jumbotron&gt;</pre>
                <div class="divider"></div>
                <h4>Run tests:</h4>
                <pre>npm run unit Jumbotron</pre>
              </accordion-item>
            </accordion>
          </panel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Accordion from '../../components/Accordion.vue';
  import AccordionItem from '../../components/AccordionItem.vue';

  export default {
    components: {
      Accordion,
      AccordionItem
    }
  }
</script>