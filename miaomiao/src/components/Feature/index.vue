<template>
	<div class="feature_body">
		<Loading v-if="isLoading" />
        <Scroller v-else>
        	<ul>
            	<li>
                	<div class="card">
                    	<div v-for="item in card" class="itemCard" @tap="handleToFeature(item)">{{ item.value }}</div>
                	</div>
            	</li>
        	</ul>
        </Scroller>
	</div>
</template>

<script>
	export default{
		name : 'Feature',
		data(){
        	return {
            	cinemaList : [],
            	isLoading : true,
            	card : [
            	    { key : 'allowRefund' , value : '改签' },
            	    { key : 'buyout' , value : '退票' },
            	    { key : 'cityCardTag' , value : '影城卡' },
            	    { key : 'deal' , value : '可停车' },
            	    { key : 'endorse' , value : 'MX4D厅' },
            	    { key : 'sell' , value : '折扣卡' },
            	    { key : 'snack' , value : '观影小食'},
            	],
        	}
    	},
    	mounted(){
        	var cityId = this.$store.data;
            //console.log(cityId);
        	this.isLoading = true;
        	this.axios.get('/api/cinemaList?cityId='+cityId).then((res)=>{
            	var msg = res.data.msg;
            	if(msg === 'ok'){
                	this.isLoading = false;
                    /*window.localStorage.setItem('cityList' , JSON.stringify(cityList));
                    window.localStorage.setItem('hotList' , JSON.stringify(hotList));*/
            	}
        	});
    	},
    	methods : {
    		handleToFeature(item){
                this.$store.commit('feature/CITY_FEATURE',{ item });
                window.localStorage.setItem('key',item.key);
                window.localStorage.setItem('value',item.value);
    			this.$router.push('/cinema/featureResult');
                //console.log(item.key);
    		}
    	}
	}
</script>

<style scoped>
.feature_body .card{ display: flex;flex-wrap: wrap;}
.feature_body .card div{ padding: 0 25px; height: 19px; line-height: 19px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 17px; margin-right: 15px;margin-top: 15px;margin-left: 15px;}
.feature_body .itemCard{
	text-align: center;
}
</style>