<template>
    <div id="main">
        <Header title="喵喵影院" />
        <div id="content">
            <div class="cinema_menu">
				<div class="city_switch">
				    全城 <i class="iconfont icon-triangle-arrow-r"></i>
				</div>
				<div class="brand_swtich">
				    品牌 <i class="iconfont icon-triangle-arrow-r"></i>
				</div>
                <div class="feature_switch" @touchstart="changeState">
                    <div  v-if="temp">
                        <router-link to="/cinema/feature" class="feature_change" style="text-decoration:none;">
                            <span>特色</span>
                            <i class="iconfont icon-triangle-arrow-d"></i>
                        </router-link>
                    </div>
                    <div v-else>
                        <router-link to="/cinema/ciList" style="text-decoration:none;color:black;">
                            <span>特色</span>
                            <i class="iconfont icon-triangle-arrow-r"></i>
                        </router-link>
                    </div>
                </div>
	        </div>
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
        <TabBar />
        <router-view name="feature" />
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';

export default {
    name : 'Cinema',
    components : {
        Header,
        TabBar,
        
    },
    data(){
        return{
            temp : false,
        }
    },
    methods : {
        changeState(){
            this.temp = !this.temp;
        }
    },
}
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;z-index:10;}
.cinema_menu .feature_switch{ margin-left: 20px; height:100%; line-height: 45px;}
.cinema_menu .feature_change.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.cinema_menu .feature_change.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
</style>
