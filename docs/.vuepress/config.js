{
    module.exports = {
		title: 'Xiaoliang Blog',
		description: 'Hello, my friend!',
		/*head: [	
			[
				'link', {
					rel: 'icon',
					href: `/favicon.ico`
				}
			]
		],
		dest: './docs/.vuepress/dist',
		ga: '', */
		//evergreen: true,
	
		themeConfig: {
			sidebar: 'auto',

			search: false,
			searchMaxSuggestions: 10,


/*
			sidebarDepth: 2
			sidebar: [
			{
				title: 'Guide',
				collapsable: false,
				children: ['/guide/']
			}         
			]
*/
			nav: [
				{ text: 'Home', link: '/' },
				{ text: 'Guide', link: '/guide/' },
			{
				text: 'Category',
				items: [
				  { text: 'Linux', link: '/linux/' },
				  { text: 'Cpp', link: '/cpp/' },
				  { text: 'Java', link: '/java/' },
				  { text: 'Python', link: '/python/' }
				  
				]
			},
		   
				{ text: 'External', link: 'https://www.baidu.com' },
			]
		}





    }
 /* 
    themeConfig: {


    }   */
}
