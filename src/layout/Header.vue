<template>
    <div class="navbar">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-1 col-md-1 col-sm-2 col-xs-2">
                    <div class="nav_logo">
                        <router-link  :to="`/${$i18n.locale}`" class="logo-nav logonaveditwidth">
                            <img src="@/assets/img/logowhite.webp" />
                        </router-link>
                    </div>
                </div>
                <!----- navbar links ---------->
                <div class="col-lg-9 col-md-9 col-sm-7 col-xs-7">
                    <div class="nav-r">
                        <div class="navy">
                            <ul class="nav cf editllimargin" id="ul1">
                                <li class="tooltip">
                                <a class="tooglesearch search1 " id="search-btn">
                                        <!-- <img src="{{asset('website/dist/img/asm/Icons-mono1.png')}}"  alt=""> -->
                                        <img src="@/assets/img/asm/Icons-mono1.png" />
                                        <span class="tooltiptext">بحث</span>
                                    </a>
                                </li>
                               

                                <li class="tooltip">
                                    <router-link :to="`/${$i18n.locale}/department`" class="search1">
                                        <img src="@/assets/img/asm/baseline-filter.png" />
                                        <span class="tooltiptext">الاقسام</span>
                                    </router-link>
                                </li>
                                <li class="tooltip">
                                    <!-- <span class="badge badge-secondary">15</span> -->
                                    <a href="#" class="search1">
                                        <img src="@/assets/img/asm/outline_shop.png" />
                                        <span class="tooltiptext">المدونة</span>
                                    </a>
                                </li>
                                <li class="tooltip dropdown">
                                    <!--  <span class="badge badge-secondary">15</span> -->
                                    <a href="#" class="search1">
                                        <img src="@/assets/img/asm/outline-movie.png" />
                                        <span class="tooltiptext">الاعلانات</span>
                                    </a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--  <div class="col-lg-3 col-sm-4  col-xs-0">
                    <ul class="navsss">

                        <li><a class="link {{ Request::is('categories') ? 'active' : '' }}" href="{{url('categories')}}">الأقسام</a></li>
                        <li class="hidden-xs"><a class="link {{ Request::is('gallery_single') ? 'active' : '' }}" href="{{url('gallery_single')}}">المدونات</a></li>
                        <li><a class="link {{ Request::is('support') ? 'active' : '' }}" href="{{url('support')}}">الدعم</a></li>
                    </ul>
                </div> -->
                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
                    <div class="nav_left">
                        <ul class="nav-tools">



                            <!--- show this if user logged in --->
                            <li class="dropdown">
                                <a href="javascript:void(0)" class="my_pro">
                                    <span class="profile_nav"> 
                                        <img src="@/assets/img/user.webp" /> 
                                    </span>
                                    <!-- <span class="hidden-xs "> ريم فارس </span> -->
                                    <span class="caret"></span>
                                </a>
                                <ul class="dropdown-menu uldropdownnew">
                                    <li>
                                        <a href="#" class="notifi1">
                                            <span> الملف الشخصى</span>
                                            <i class="fas fa-chevron-left"></i>
                                        </a>

                                    </li>
                                    <li>
                                        <a href="#" class="notifi1">
                                            <span> لوحة التحكم</span>
                                            <i class="fas fa-chevron-left"></i>
                                        </a>

                                    </li>
                                    <li>
                                        <a href="#" class="notifi1">
                                            <span> التنبيهات</span><span class="absnum11">15</span>
                                            <i class="fas fa-chevron-left"></i>
                                        </a>

                                    </li>
                                    <li>
                                        <a href="#" class="notifi1">
                                            <span>الرسائل</span><span class="absnum11">15</span>
                                            <i class="fas fa-chevron-left"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="notifi1">
                                            <span>انضم كمقدم خدمة جديد</span>
                                            <i class="fas fa-chevron-left"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="notifi1">
                                            <span> انظم لفريق الدعم المساند</span>
                                            <i class="fas fa-chevron-left"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="notifi1">
                                            <span>الدعم و التواصل</span>
                                            <i class="fas fa-chevron-left"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="notifi1">
                                            <span> دعم المتاجر </span>
                                            <i class="fas fa-chevron-left"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="notifi1">
                                            <span>السياسات و الاحكام</span>
                                            <i class="fas fa-chevron-left"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="notifi1">
                                            <span> الاقتراحات</span>
                                            <i class="fas fa-chevron-left"></i>
                                        </a>

                                    </li>
                                    <li>
                                        <a href="#" class="notifi1">
                                            <span>المفضلة</span>
                                            <i class="fas fa-chevron-left"></i>
                                        </a>

                                    </li>
                                    <li>
                                        <a data-toggle="modal" data-target="#shareModal" class="notifi1">
                                            <span>مشاركة الرابط مع صديق </span>
                                            <i class="fas fa-chevron-left"></i>
                                        </a>

                                    </li>
                                    <li>
                                        <a @click.prevent="setLocale('en')" class="lang" v-if="$i18n.locale == 'ar'">
                                            <span>اللغة</span>
                                            <img src="@/assets/img/united-kingdom.webp" alt="English">
                                        </a>
                                        <a @click.prevent="setLocale('ar')" class="lang" v-else>
                                            <span>اللغة</span>
                                            <img src="@/assets/img/flag.webp" alt="Arabic">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="notifi1">
                                            <span>تسجيل الخروج</span>
                                            <i class="fas fa-chevron-left"></i>
                                        </a>

                                    </li>
                                </ul>
                            </li>
                            <!--- end if statement --->
                            <!--   <li>
                                <a href="#" class="lang"><img src="{{asset('website/dist/img/united-kingdom.png')}}" alt="English"></a>
                            </li> -->
                        </ul>
                        <!--- show this if user NOT logged in --->
                        <!-- <a href="{{url('user_profile')}}" class="log_a">تسجيل الدخول / تسجيل جديد</a> -->
                        <!--- end if statement --->

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Header',
  mounted(){
    window.$('.dropdown').hover(function() {
        window.$(this).find('.dropdown-menu').first().stop(true, true).delay(200).fadeIn(500);
    }, function() {
        window.$(this).find('.dropdown-menu').first().stop(true, true).delay(200).fadeOut(500);
    });
  },
  methods:{
      setLocale(locale){
          this.$i18n.locale = locale;
          this.$router.push({
              params: {
                  lang: locale
              }
          })
      }
  }
}
</script>

