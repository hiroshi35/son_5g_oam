<template>
  <div>
    <div class="container-fluid">
      <page-header title="Tabs"></page-header>
      <div class="row">
        <div class="col-md-12">
          <panel type="panel-blue-sky">
            <h3 slot="header">Accordion</h3>
            <accordion id="accordion">
              <accordion-item title='Collapsible Group Item #1' :active="true"><h4>Content of Tab 1</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto deserunt dolore doloremque dolores, ea explicabo facere harum illum in ipsum, iusto modi nostrum officia optio perferendis repudiandae velit.
              </accordion-item>
              <accordion-item title='Collapsible Group Item #2'><h4>Content of Tab 2</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maiores neque velit. Accusantium asperiores assumenda aut beatae, commodi consequuntur culpa laboriosam molestias mollitia, provident quae quam quisquam repellendus sit veniam.
              </accordion-item>
              <accordion-item title='Collapsible Group Item #3'><h4>Content of Tab 3</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, commodi distinctio enim esse eum excepturi hic in inventore labore laborum libero maxime molestias nihil perferendis quasi reiciendis reprehenderit soluta ut!
              </accordion-item>
            </accordion>
          </panel>
        </div>
        <div class="col-md-12">
          <panel type="panel-yellow" :header=false :footer=true>
            <tabs class="rounded-top-corners">
              <tab title='<i class="fa fa-leaf" aria-hidden="true"></i> Tab 1' :selected="true"><h4>Content of Tab 1</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet architecto deserunt dolore doloremque dolores, ea explicabo facere harum illum in ipsum, iusto modi nostrum officia optio perferendis repudiandae velit.
              </tab>
              <tab title='<i class="fa fa-paw" aria-hidden="true"></i> Tab 2'><h4>Content of Tab 2</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maiores neque velit. Accusantium asperiores assumenda aut beatae, commodi consequuntur culpa laboriosam molestias mollitia, provident quae quam quisquam repellendus sit veniam.
              </tab>
              <tab title='<i class="fa fa-lemon-o" aria-hidden="true"></i> Tab 3'><h4>Content of Tab 3</h4>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, commodi distinctio enim esse eum excepturi hic in inventore labore laborum libero maxime molestias nihil perferendis quasi reiciendis reprehenderit soluta ut!
              </tab>

            </tabs>

            <h3 slot="footer">Tabs</h3>
          </panel>
        </div>

      </div>
      <div class="row">
        <div class="col-md-6">
          <panel type="panel-sky">
            <h3 slot="header">Vertical Tabs(Left)</h3>
            <tabs :vertical=true>
              <tab title='<i class="fa fa-home" aria-hidden="true"></i>' :selected="true">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at excepturi facere facilis fugiat id, nesciunt odio pariatur perferendis praesentium quaerat quidem quos recusandae repellat saepe sequi tempore tenetur voluptates.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam asperiores aut corporis cum debitis eos explicabo, id incidunt magnam maiores minima, modi natus quaerat quisquam suscipit ut velit voluptatem.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, aspernatur aut culpa dicta dolores eaque esse fuga hic, ipsam laborum natus necessitatibus nemo non nostrum quae quidem sed tempora voluptatum!
              </tab>
              <tab title='<i class="fa fa-university" aria-hidden="true"></i>'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa cupiditate doloribus dolorum expedita hic illum itaque labore laudantium modi, molestiae officia quidem quis sint sit ut, velit vero voluptas?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate ex exercitationem inventore laudantium, numquam sapiente. Aliquid eaque, eos, ex explicabo iure magnam necessitatibus nesciunt pariatur sapiente sed temporibus voluptates!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus asperiores assumenda earum eligendi laudantium optio quis suscipit. Aliquam amet corporis delectus eveniet hic, impedit labore maxime minus qui ratione.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolorem necessitatibus odit perferendis perspiciatis quam quibusdam repudiandae. Alias aspernatur dolor libero minus quia? Adipisci beatae dolore dolores facilis fugit laudantium.
              </tab>
              <tab title='<i class="fa fa-building" aria-hidden="true"></i>'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur deleniti dignissimos, distinctio dolore error est expedita illum modi nihil nobis non officia porro quo suscipit tempora unde ut voluptates!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eos ex inventore ipsa neque non voluptatibus! Accusamus, amet atque debitis deleniti ea fuga maiores molestiae nihil nobis nulla tempore ut!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium ad aut delectus ipsa iste minima molestiae, non, nostrum obcaecati officiis omnis porro provident quas rem rerum voluptate voluptates voluptatibus.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est fugiat, illo obcaecati odio perspiciatis quas repellat ullam veniam veritatis. Error eum expedita iusto libero natus provident quia saepe sapiente.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi aspernatur at culpa eaque eligendi enim inventore laborum laudantium modi molestiae mollitia omnis praesentium provident quaerat rem rerum, saepe tempore!
              </tab>

            </tabs>
          </panel>
        </div>
        <div class="col-md-6">
          <panel type="panel-red">
            <h3 slot="header">Vertical Tabs (Right)</h3>
            <tabs :vertical=true :right=true>
              <tab title='<i class="fa fa-code" aria-hidden="true"></i>' :selected="true">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cumque, dolorem, ea eos eveniet magni molestiae nulla praesentium sapiente suscipit, voluptas voluptatibus. Accusamus asperiores ducimus et expedita in itaque nulla?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam consequuntur cumque debitis dicta eum eveniet excepturi mollitia nemo, nulla, optio possimus, quos reiciendis repellendus saepe sed soluta suscipit voluptatibus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at excepturi facere facilis fugiat id, nesciunt odio pariatur perferendis praesentium quaerat quidem quos recusandae repellat saepe sequi tempore tenetur voluptates.
              </tab>
              <tab title='<i class="fa fa-database" aria-hidden="true"></i>'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa cupiditate doloribus dolorum expedita hic illum itaque labore laudantium modi, molestiae officia quidem quis sint sit ut, velit vero voluptas?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem exercitationem illo maiores, pariatur qui recusandae. Aperiam earum est, illum iusto nam quae soluta suscipit ullam veniam veritatis. Nesciunt, quasi?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolore dolores explicabo facere quasi rerum unde vero. Amet enim ex id illo possimus quisquam repellendus, reprehenderit sequi ut veniam voluptate.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum iure necessitatibus optio rem sequi. A cumque dolorum pariatur perferendis similique soluta voluptatem! Doloribus ipsa quo vitae. Cupiditate delectus esse eveniet.
              </tab>
              <tab title='<i class="fa fa-terminal" aria-hidden="true"></i>'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur deleniti dignissimos, distinctio dolore error est expedita illum modi nihil nobis non officia porro quo suscipit tempora unde ut voluptates!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio eius facilis id impedit laboriosam obcaecati reiciendis. Adipisci, autem doloremque fuga possimus quas similique unde. Aliquid aperiam deserunt ipsum qui soluta.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium culpa, deleniti exercitationem harum, illo, natus neque optio qui sed soluta vel veniam? Ad aliquid consectetur cumque dicta, doloremque ducimus nemo?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet animi architecto, assumenda dolorem dolorum eligendi iusto laboriosam nemo nihil officiis possimus, praesentium quos recusandae sit tempora ut, vitae voluptate!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut autem consequuntur, corporis deserunt dolorum ea eius fuga ipsa laborum libero molestias nam provident quis rem saepe veniam. Atque, excepturi.
              </tab>

            </tabs>
          </panel>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->

  </div>
</template>

<script>
  import Accordion from '../components/Accordion.vue';
  import AccordionItem from '../components/AccordionItem.vue';
  import Tabs from '../components/Tabs.vue';
  import Tab from '../components/Tab.vue';

  export default {
    components: {
      Accordion,
      Tabs,
      Tab,
      AccordionItem
    }
  }
</script>