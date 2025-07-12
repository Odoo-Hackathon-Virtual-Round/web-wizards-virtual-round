{
    'name': 'ReWear - Community Clothing Exchange',
    'version': '1.0',
    'category': 'Website/E-commerce',
    'summary': 'A platform for exchanging unused clothing through swaps or points.',
    'description': """
        ReWear promotes sustainable fashion by enabling users to exchange
        wearable garments, reducing textile waste.
    """,
    'author': 'Your Name/Team Name',
    'website': 'https://www.yourwebsite.com',
    'depends': ['base', 'mail', 'website', 'portal'], # 'mail' for email notifications, 'website' for frontend, 'portal' for user dashboard
    'data': [
        'security/ir.model.access.csv',
        'security/rewear_security.xml',
        'views/rewear_menus.xml',
        'views/rewear_views.xml',
        'views/rewear_templates.xml', # For website pages
    ],
    'demo': [],
    'installable': True,
    'application': True,
    'auto_install': False,
    'license': 'LGPL-3',
    'assets': {
        'web.assets_frontend': [
            'rewear/static/src/css/rewear.css',
            'rewear/static/src/js/rewear.js',
        ],
    },
}