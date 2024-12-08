AUTHOR = 'Ogamdo'
SITENAME = "Ogamdo's Blog"
SITEURL = "Ogmadoe.github.io"

PATH = "content"
THEME = r'D:\pelicanThemes\~\pelican-themes\resume'


TIMEZONE = 'Asia/Seoul'

DEFAULT_LANG = 'ko'  # Pelican에서 한국어를 사용하는 경우 'ko'로 변경



# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (
    ("Pelican", "https://getpelican.com/"),
    ("Python.org", "https://www.python.org/"),
    ("Jinja2", "https://palletsprojects.com/p/jinja/"),
)

# Social widget
SOCIAL = (
    ("GitHub", "https://github.com/Ogamdo"),
    ("LinkedIn", "https://www.linkedin.com"),
)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True
