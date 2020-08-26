<template>
  <div>
    <div class="container-fluid">
      <div class="row container-margin">
        <div class="col-md-12 inbox">
          <panel type="panel-white right-angular">
            <div slot="header">
              <button class="btn btn-green rounded"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
              <div class="btn-group btn-group-margin" role="group">
                <button type="button" class="btn btn-blue rounded-left"><i class="fa fa-reply" aria-hidden="true"></i>
                </button>

                <button type="button" class="btn btn-blue rounded-right"><i class="fa fa-reply-all"
                                                                            aria-hidden="true"></i></button>
              </div>
              <div class="btn-group btn-group-margin" role="group">
                <button type="button" class="btn btn-red rounded-left"><i class="fa fa-trash-o" aria-hidden="true"></i>
                </button>

                <button type="button" class="btn btn-yellow rounded-right"><i class="fa fa-flag" aria-hidden="true"></i>
                </button>
              </div>
              <button class="btn btn-gray rounded pull-right"><i class="fa fa-cog" aria-hidden="true"></i></button>

            </div>
            <div class="row">
              <div class="col-md-3">
                <h5>FOLDERS</h5>
                <div class="list-group sc-list-group">
                  <a href="#" class="list-group-item"><i class="fa fa-inbox" aria-hidden="true"></i> INBOX <span
                    class="badge nav-badge pull-right bg-red">2</span></a>
                  <a href="#" class="list-group-item"><i class="fa fa-star-o" aria-hidden="true"></i> FAVORITE <span
                    class="badge nav-badge pull-right bg-teal">1</span></a>
                  <a href="#" class="list-group-item"><i class="fa fa-flag-o" aria-hidden="true"></i> SPAM <span
                    class="badge nav-badge pull-right bg-blue">2</span></a>
                  <a href="#" class="list-group-item"><i class="fa fa-trash-o" aria-hidden="true"></i> TRASH <span
                    class="badge nav-badge pull-right">4</span></a>
                </div>

                <h5>CATEGORIES</h5>
                <div class="list-group sc-list-group">
                  <a href="#" class="list-group-item"> WORK <span
                    class="badge nav-badge pull-right bg-blue">3</span></a>
                  <a href="#" class="list-group-item"> SOCIAL <span
                    class="badge nav-badge pull-right bg-yellow">1</span></a>
                  <a href="#" class="list-group-item"> DOCUMENTS <span
                    class="badge nav-badge pull-right bg-blue-sky">4</span></a>
                  <a href="#" class="list-group-item"> CLIENTS <span
                    class="badge nav-badge pull-right bg-purple">4</span></a>
                  <a href="#" class="list-group-item"> FAMILY <span class="badge nav-badge pull-right bg-moss">4</span></a>
                </div>
              </div>
              <div class="col-md-9">
                <div class="row">
                  <div class="col-md-4">
                    <h3>
                      Inbox (10)
                    </h3>
                  </div>
                  <div class="col-md-8">
                    <div class="input-group">
                      <input type="text" class="form-control rounded-left" placeholder="Search">
                      <span class="input-group-btn">
                                            <button class="btn btn-gray rounded-right" type="button">Search</button>
                                            </span>

                    </div>
                  </div>
                </div>
                <div class="list-group sc-list-group margin-top-10">
                  <a href="#" class="list-group-item message" v-for="message in messages">
                                        <span class="row">
                                            <span class="col-md-4 col-sm-4 col-xs-12">
                                                <span class="pull-left pos-rel">
                                                    <input :id="'checkbox' + message.id" class="checkbox-custom" :name="'checkbox' + message.id""
                                                           type="checkbox">
                                                    <label :for="'checkbox' + message.id" class="checkbox-custom-label"><span></span></label>
                                                </span>
                                                <img class="img-circle avatar margin-right-5"
                                                     :src="message.author.avatar" width="30px" height="30px">
                                                <span class="name" v-text="message.author.name"></span>
                                            </span>
                                            <span class="col-md-4 col-sm-4 col-xs-7"><small
                                              class="subject" v-text="message.subject"></small></span>
                                            <span class="col-md-4 col-sm-4 col-xs-5">
                                                <span class="badge nav-badge" :class="labels[message.label]" v-text="message.label"></span>
                                                <small class="date pull-right" v-text="message.date"></small>
                                            </span>
                                        </span>

                  </a>
                </div>
                <div class="divider"></div>
                <div class="col-md-12" style="text-align: center">
                  <nav>
                    <ul class="pagination">
                      <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a>
                      </li>
                      <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li>
                        <a href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
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

<script>
  export default {
    data () {
      return {
        labels: {
          work: 'bg-blue',
          social: 'bg-yellow',
          documents: 'bg-blue-sky',
          family: 'bg-moss'
        },
        messages: [
          {
            id: 1,
            author: {
              name: 'Joe Doe',
              avatar: '/static/imgs/avatars/man.png'
            },
            label: 'work',
            subject: 'Meeting at 11 PM',
            date: '12 PM'
          },
          {
            id: 2,
            author: {
              name: 'John Doe',
              avatar: '/static/imgs/avatar.jpg'
            },
            label: 'work',
            subject: 'Meeting at 12 PM',
            date: '6 hours ago'
          },
          {
            id: 3,
            author: {
              name: 'John Doe',
              avatar: '/static/imgs/avatars/man-6.png'
            },
            label: 'family',
            subject: 'Meeting at 10 PM',
            date: '10 hours ago'
          },
          {
            id: 4,
            author: {
              name: 'John Smith',
              avatar: '/static/imgs/avatars/man-4.png'
            },
            label: 'work',
            subject: 'Hey!',
            date: '2 days ago'
          },
          {
            id: 5,
            author: {
              name: 'John Doe',
              avatar: '/static/imgs/avatars/man-3.png'
            },
            label: 'social',
            subject: 'Meeting at 12 PM',
            date: '2 days ago'
          },
          {
            id: 6,
            author: {
              name: 'John Doe',
              avatar: '/static/imgs/avatar.jpg'
            },
            label: 'family',
            subject: 'Meeting at 12 PM',
            date: '2 days ago'
          },
          {
            id: 7,
            author: {
              name: 'John Smith',
              avatar: '/static/imgs/avatars/man-4.png'
            },
            label: 'work',
            subject: 'Hi!',
            date: '3 days ago'
          },
          {
            author: {
              name: 'Maria Doe',
              avatar: '/static/imgs/avatars/woman-1.png'
            },
            label: 'work',
            subject: 'Meeting',
            date: '3 days ago'
          },
          {
            id: 8,
            author: {
              name: 'John Doe',
              avatar: '/static/imgs/avatars/man-2.png'
            },
            label: 'documents',
            subject: 'Meeting at 9 PM',
            date: '4 days ago'
          },
          {
            id: 9,
            author: {
              name: 'John Doe',
              avatar: '/static/imgs/avatar.jpg'
            },
            label: 'family',
            subject: 'Meeting at 12 PM',
            date: '4 days ago'
          },
          {
            id: 10,
            author: {
              name: 'John Doe',
              avatar: '/static/imgs/avatars/man-8.png'
            },
            label: 'social',
            subject: 'Meeting',
            date: '4 days ago'
          }
        ]
      }
    }
  }
</script>