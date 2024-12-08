AUTHOR = 'Ogamdo'
SITENAME = "Ogamdo's Blog"
SITEURL = ''

PATH = 'content'
TIMEZONE = 'Asia/Seoul'
DEFAULT_LANG = 'ko'

# 테마 경로 설정
THEME = '.'

# 마크다운 및 페이지 기본 설정
MARKUP = ('md', 'html')
DEFAULT_PAGINATION = 10

# URL 설정
ARTICLE_URL = '{category}/{slug}.html'
ARTICLE_SAVE_AS = '{category}/{slug}.html'

CATEGORY_URL = '{slug}/'
CATEGORY_SAVE_AS = '{slug}/index.html'
