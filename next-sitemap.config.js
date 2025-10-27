/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://peerlogics.com.pk',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/admin/*',
    '/api/*',
    '/_next/*',
    '/out/*',
    '/404',
    '/500'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/_next/', '/out/']
      }
    ],
    additionalSitemaps: [
      'https://peerlogics.com.pk/sitemap.xml'
    ]
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    const customConfig = {
      loc: path,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }

    // Homepage gets highest priority
    if (path === '/') {
      customConfig.priority = 1.0
      customConfig.changefreq = 'weekly'
    }

    // Service pages get high priority
    if (path.startsWith('/services/')) {
      customConfig.priority = 0.9
      customConfig.changefreq = 'monthly'
    }

    // About and Contact pages
    if (path === '/about' || path === '/contact') {
      customConfig.priority = 0.8
      customConfig.changefreq = 'monthly'
    }

    return customConfig
  },
  additionalPaths: async (config) => {
    const result = []

    // Add service pages with specific priorities
    const services = [
      'website-development',
      'ecommerce', 
      'ui-ux',
      'software-development',
      'medical-billing',
      'hr-management'
    ]

    services.forEach(service => {
      result.push({
        loc: `/services/${service}`,
        changefreq: 'monthly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      })
    })

    return result
  }
}



