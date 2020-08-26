<template>
  <div>

    <div class="container-fluid">
      <page-header title="Panels"></page-header>
      <div class="row">
        <div class="col-md-6">
          <panel :header=false>

            <h2>Basic Panel</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, quas quis. Amet expedita
              fuga fugit mollitia temporibus? Dolore fugit iure libero officiis!
              Est id in incidunt quaerat quos saepe suscipit.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <code>
              &lt;panel :header=false&gt; Body... &lt;/panel&gt;
            </code>
          </panel>
          <panel type="panel-green" :footer=true>
            <h3 slot="header">Green Panel</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aspernatur consectetur.
            <code>
              <br>
              &lt;panel type="panel-green" :footer=true&gt;<br>
              &lt;h3 slot="header"&gt;Green Panel&lt;/h3&gt;
              Body...
              &lt;h5 slot="footer"&gt;Footer&lt;/h5&gt;
              &lt;/panel&gt;
            </code>

            <h5 slot="footer">Footer</h5>
          </panel>
          <panel type="panel-red" :footer=true>
            <h3 slot="header">Red Panel</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aspernatur consect.
            <code>
              <br>
              &lt;panel type="panel-red" :footer=true&gt;<br>
              &lt;h3 slot="header"&gt;Red Panel&lt;/h3&gt;
              Body...
              &lt;h5 slot="footer"&gt;Footer&lt;/h5&gt;
              &lt;/panel&gt;
            </code>
            <h5 slot="footer">Footer</h5>
          </panel>
          <panel>
            <h3 slot="header">Panel Without Footer</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aspernatur consectetur cum
            deserunt eligendi eveniet facilis fugit id impedit ipsam libero natus quo, rem veritatis
            voluptatem voluptatibus? Quisquam, voluptates.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa debitis dicta eos, impedit incidunt molestias, nihil nisi nostrum quae quidem quisquam rem rerum soluta, tempora! Earum soluta ullam voluptate.
            <code>
              <br>
              &lt;panel&gt;
              &lt;h3 slot="header"&gt;Primary Green Panel&lt;/h3&gt;
              Body...
              &lt;/panel&gt;
            </code>
          </panel>
        </div>
        <div class="col-md-6">
          <panel type="panel-primary" :footer=true>
            <h3 slot="header">Blue Panel</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <code>
              <br>
              &lt;panel type="panel-primary" :footer=true&gt;<br>
              &lt;h3 slot="header"&gt;Blue Panel&lt;/h3&gt;
              Body...
              &lt;h5 slot="footer"&gt;Footer&lt;/h5&gt;
              &lt;/panel&gt;
            </code>
            <h5 slot="footer">Footer</h5>
          </panel>
          <panel type="panel-yellow" :footer=true>
            <h3 slot="header">Yellow Panel</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <code>
              <br>
              &lt;panel type="panel-yellow" :footer=true&gt;<br>
              &lt;h3 slot="header"&gt;Yellow Panel&lt;/h3&gt;
              Body...
              &lt;h5 slot="footer"&gt;Footer&lt;/h5&gt;
              &lt;/panel&gt;
            </code>
            <h5 slot="footer">Footer</h5>
          </panel>
          <panel :footer=true type="panel-orange">
            <h3 slot="header">Orange Panel</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aspernatur consectetur.
            <code>
              <br>
              &lt;panel :footer=true&gt;<br>
              &lt;h3 slot="header"&gt;Orange Panel&lt;/h3&gt;
              Body...
              &lt;h5 slot="footer"&gt;Footer&lt;/h5&gt;
              &lt;/panel&gt;
            </code>
            <h5 slot="footer">Footer</h5>
          </panel>
          <panel :header=false :footer=true>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aspernatur consectetur cum
            deserunt eligendi eveniet facilis fugit id impedit ipsam libero natus quo, rem veritatis
            voluptatem voluptatibus? Quisquam, voluptates.
            <h3 slot="footer">Panel Without Header</h3>
            <code>
              <br>
              &lt;panel :header=false :footer=true&gt;<br>
              Body...
              &lt;h5 slot="footer"&gt;Footer&lt;/h5&gt;
              &lt;/panel&gt;
            </code>
          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-teal" :footer=true>
            <h3 slot="header">Teal Panel</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque excepturi facilis harum iure libero minima molestiae saepe, sint sit voluptas! Dolores esse ipsum qui quidem sed voluptatem voluptates. Enim, suscipit.
            <code>
              <br>
              &lt;panel type="panel-teal" :footer=true&gt;<br>
              &lt;h3 slot="header"&gt;teal Panel&lt;/h3&gt;
              Body...
              &lt;h5 slot="footer"&gt;Footer&lt;/h5&gt;
              &lt;/panel&gt;
            </code>
            <h5 slot="footer">Footer</h5>
          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <panel type="panel-green" :footer=true>
            <div slot="header">
              <h3>Panel Header + Tabs</h3>
            </div>
            <tabs>
              <tab title="Tab 1" :selected="true"><h4>Code</h4>
                <code>
                  &#x3C;panel type=&#x22;panel-green&#x22; :footer=true&#x3E;
                  <br>
                  &#x3C;div slot=&#x22;header&#x22;&#x3E;
                  &#x3C;h3&#x3E;Panel Header + Tabs&#x3C;/h3&#x3E;
                  &#x3C;/div&#x3E;
                  <br>
                  &#x3C;tabs&#x3E;
                  &#x3C;tab title=&#x22;Tab 1&#x22;&#x3E;&#x3C;h4&#x3E;Content of Tab 1&#x3C;/h4&#x3E;
                  ...
                  &#x3C;/tab&#x3E;
                  &#x3C;tab title=&#x22;Tab 2&#x22;&#x3E;&#x3C;h4&#x3E;Content of Tab 2&#x3C;/h4&#x3E;
                  ...
                  &#x3C;/tab&#x3E;
                  &#x3C;tab title=&#x22;Tab 3&#x22;&#x3E;&#x3C;h4&#x3E;Content of Tab 3&#x3C;/h4&#x3E;
                  ...
                  &#x3C;/tab&#x3E;
                  &#x3C;tab title=&#x22;Tab 4&#x22;&#x3E;&#x3C;h4&#x3E;Content of Tab 4&#x3C;/h4&#x3E;
                  ...
                  &#x3C;/tab&#x3E;
                  &#x3C;/tabs&#x3E;
                  <br>
                  &#x3C;h5 slot=&#x22;footer&#x22;&#x3E;Footer&#x3C;/h5&#x3E;
                  &#x3C;/panel&#x3E;
                </code>
              </tab>
              <tab title="Tab 2"><h4>Content of Tab 2</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maiores neque velit.
                Accusantium asperiores assumenda aut beatae, commodi consequuntur culpa laboriosam
                molestias mollitia, provident quae quam quisquam repellendus sit veniam.
              </tab>
              <tab title="Tab 3"><h4>Content of Tab 3</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, commodi distinctio
                enim esse eum excepturi hic in inventore labore laborum libero maxime molestias nihil
                perferendis quasi reiciendis reprehenderit soluta ut!
              </tab>
              <tab title="Tab 4"><h4>Content of Tab 4</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deserunt facilis
                fugiat fugit in incidunt veritatis vero. Earum, molestiae neque non nulla porro
                praesentium rem saepe tempora veniam voluptatibus.
              </tab>
            </tabs>
            <h5 slot="footer">Footer</h5>
          </panel>

        </div>
        <div class="col-md-6">
          <panel type="panel-primary" :footer=true>
            <div slot="header">
              <h3>Panel Header + Tabs + Icons</h3>
            </div>
            <tabs>
              <tab title='<i class="fa fa-wikipedia-w" aria-hidden="true"></i>' :selected="true"><h4>Content of Tab 1</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id natus obcaecati saepe sunt. A deserunt doloribus, ea eaque, eius eos fuga libero nihil nostrum nulla obcaecati perferendis quaerat, qui quo.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consectetur delectus ducimus ea esse eveniet facilis fugit, id ipsum laudantium maxime minus nam necessitatibus optio quidem rerum sit vero voluptatibus.
              </tab>
              <tab title='<i class="fa fa-camera" aria-hidden="true"></i>'><h4>Content of Tab 2</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maiores neque velit.
                Accusantium asperiores assumenda aut beatae, commodi consequuntur culpa laboriosam
                molestias mollitia, provident quae quam quisquam repellendus sit veniam.
              </tab>
              <tab title='<i class="fa fa-rss" aria-hidden="true"></i>'><h4>Content of Tab 3</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, commodi distinctio
                enim esse eum excepturi hic in inventore labore laborum libero maxime molestias nihil
                perferendis quasi reiciendis reprehenderit soluta ut!
              </tab>
              <tab title='<i class="fa fa-terminal" aria-hidden="true"></i>'><h4>Content of Tab 4</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad deserunt facilis
                fugiat fugit in incidunt veritatis vero. Earum, molestiae neque non nulla porro
                praesentium rem saepe tempora veniam voluptatibus.
              </tab>
            </tabs>
            <h5 slot="footer">Footer</h5>
          </panel>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <panel type="panel-red" :footer=true :header=false>
            <tabs class="rounded-top-corners">
              <tab title='<i class="fa fa-leaf" aria-hidden="true"></i>' :selected="true"><h4>Content of Tab 1</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto deserunt
                dolore doloremque dolores, ea explicabo facere harum illum in ipsum, iusto modi nostrum
                officia optio perferendis repudiandae velit.
              </tab>
              <tab title='<i class="fa fa-paw" aria-hidden="true"></i>'><h4>Content of Tab 2</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maiores neque velit.
                Accusantium asperiores assumenda aut beatae, commodi consequuntur culpa laboriosam
                molestias mollitia, provident quae quam quisquam repellendus sit veniam.
              </tab>
              <tab title='<i class="fa fa-lemon-o" aria-hidden="true"></i>'><h4>Content of Tab 3</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, commodi distinctio
                enim esse eum excepturi hic in inventore labore laborum libero maxime molestias nihil
                perferendis quasi reiciendis reprehenderit soluta ut!
              </tab>
            </tabs>
            <h5 slot="footer">Tabs + Icons</h5>
          </panel>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <panel type="panel-teal" :footer=true>
            <div slot="header">
              <div class="row">
                <div class="col-md-6 col-xs-6"><h4>Panel with Buttons</h4></div>
                <div class="col-md-6 col-xs-6">

                  <button class="btn btn-panel right-angular pull-right margin-bottom-5">Add</button>
                  <button class="btn btn-panel pull-right right-angular dropdown-toggle" type="button"
                          id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="true">
                    Tools
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores assumenda
            autem, dignissimos excepturi facilis, laudantium magnam modi nihil quis quisquam quos similique
            sint sunt unde, vel velit voluptatem voluptatum.
            <div slot="footer">
              <div class="row">
                <div class="col-md-8 col-xs-6"><h4>Footer + Rounded Buttons</h4>
                </div>
                <div class="col-md-4 col-xs-6">
                  <button class="btn btn-panel rounded pull-right margin-bottom-5">Save</button>
                  <button class="btn btn-panel rounded pull-right">Cancel</button>
                </div>
              </div>
            </div>
          </panel>
        </div>
        <div class="col-md-6">
          <panel type="panel-orange right-angular" :header=false>
            <h3>Right-Angular Panel</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores assumenda
            autem, dignissimos excepturi facilis, laudantium magnam modi nihil quis quisquam quos similique
            sint sunt unde, vel velit voluptatem voluptatum.
          </panel>

        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <panel type="panel-blue-sky right-angular" :footer="true">
            <h3 slot="header">Right-Angular Panel with Header</h3>
            <h3>Content of Panel</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque dignissimos doloribus
            dolorum hic odio quia ut voluptas voluptatem. Consectetur eaque eligendi explicabo libero quidem
            quisquam repellat sint unde vel.
            <h3 slot="footer">
              and Footer
            </h3>
          </panel>
        </div>
        <div class="col-md-6">
          <panel type="panel-white right-angular" :footer="true">
            <h3 slot="header">Right-Angular White Panel with Header</h3>
            <h3>Content of Panel</h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque dignissimos doloribus
            dolorum hic odio quia ut voluptas voluptatem. Consectetur eaque eligendi explicabo libero quidem
            quisquam repellat sint unde vel.
            <h4 slot="footer">
              and Footer
            </h4>
          </panel>
        </div>
      </div>
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
  import Tab from '../components/Tab.vue'
  import Tabs from '../components/Tabs.vue'
  import PageHeader from '../components/PageHeader.vue'

  export default {
    components: {
      Tabs,
      Tab,
      PageHeader
    }
  }
</script>