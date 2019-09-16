export default {
    path : '/cinema',
    component : () => import('@/views/Cinema'),
    children : [
    	{
    		path : 'feature',
    		component : () => import('@/components/Feature')
    	},
    	{
    		path : 'ciList',
    		component : () => import('@/components/CiList')
    	},
        {
            path : 'featureResult',
            component : () => import('@/components/featureResult')
        },
    	{
    		path : '/cinema',
            redirect : '/cinema/ciList'
    	},
    ]
}