OC.L10N.register(
    "news",
    {
    "Feed contains invalid XML" : "В ленте присутствует недействительный XML",
    "Feed not found: either the website does not provide a feed or blocks access. To rule out blocking, try to download the feed on your server's command line using curl: curl http://the-feed.tld" : "Новостная лента не найдена: либо веб-сайт не предоставляет новостную ленту, либо он блокирует доступ к ней. Чтобы обойти блокировку, попробуйте скачать новостную ленту в командную строку своего сервера, используя curl: curl http://the-feed.tld",
    "Detected feed format is not supported" : "Обнаруженный формат ленты не поддерживается",
    "SSL Certificate is invalid" : "SSL сертификат недействительный ",
    "Website not found" : "Сайт не найден",
    "More redirects than allowed, aborting" : "Количество перенаправлений больше допустимого, отменяем",
    "Bigger than maximum allowed size" : "Больше максимально допустимого размера",
    "Request timed out" : "Превышено время ожидания запроса",
    "Request failed, network connection unavailable!" : "Запрос не удался, нет сетевого соединения!",
    "Request unauthorized. Are you logged in?" : "Запрос не авторизован. Вы вошли в систему?",
    "Request forbidden. Are you an admin?" : "Запрос запрещён. Вы действительно администратор?",
    "Token expired or app not enabled! Reload the page!" : "Срок действия токена истек или программа не задействована! Перезагрузите страницу!",
    "Internal server error! Please check your " : "Внутренняя ошибка сервера. Пожалуйста, проверьте",
    "Request failed, ownCloud is in currently " : "Запрос не удался, ownCloud сейчас",
    "Can not add feed: Exists already" : "Не удаётся добавить ленту: Уже существует",
    "Articles without feed" : "Статьи без новостной ленты",
    "Can not add folder: Exists already" : "Не удаётся добавить каталог. Каталог уже существует",
    "Use ownCloud cron for updates" : "Использовать стандартный cron от ownCloud для обновлений",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "Отключите, если собираетесь использовать другой механизм обновлений, например, Python updater, включенный в поставку этого приложения",
    "Purge interval" : "Интервал очистки",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "Минимальное количество секунд, после которого удалённые ленты и каталоги будут удалены из базы данных; значения меньше 60 секунд будут проигнорированы",
    "Maximum read count per feed" : "Максимальное количество статей для ленты",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off completely" : "Максимальное количество статей для каждой ленты, которые не будут удалены при очистке; если старые статьи появляются снова после прочтения, то увеличьте это значение; отрицательные значения, например, -1, полностью отключает эту функцию.",
    "Maximum redirects" : "Максимум перенаправлений",
    "How many redirects the feed fetcher should follow" : "Сколько перенаправлений должен обрабатывать загрузчик ленты",
    "Maximum feed page size" : "Максимальный размер страницы для ленты",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "Максимальный размер ленты в байтах. Если размер страницы RSS/Atom больше этого значения, обновление будет отменено",
    "Feed fetcher timeout" : "Время ожидания для загрузчика ленты",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "Максимальное количество секунд ожидания загрузки ленты RSS или Atom; если обновление занимает больше времени, то оно будет отменено",
    "Explore Service URL" : "URL сервиса исследования",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "Если указан, то URL сервиса будет опрашиваться с целью отображения лент в секции исследования. Для возврата к встроенному сервису, оставьте поле пустым.",
    "Saved" : "Сохранено",
    "Download" : "Скачать",
    "Close" : "Закрыть",
    "Ajax or webcron cron mode detected! Your feeds will not be updated correctly. It is recommended to either use the operating system cron or a custom updater." : "Обнаружена настройка синхронизации по Ajax cron или webcron! Ваши новостные ленты не будут корректно обновляться. Рекомендуется использовать cron операционной системы или собственный механизм обновления.",
    "How to set up the operating system cron" : "Как настроить cron (планировщик задач) операционной системы",
    "How to set up a custom updater (faster and no possible deadlock) " : "Как настроить другой способ обновления (быстрее и без риска взаимной блокировки)",
    "Subscribe" : "Подписаться",
    "Refresh" : "Обновить",
    "No articles available" : "Нет доступных записей",
    "No unread articles available" : "Нет непрочтённых записей",
    "Open website" : "Открыть веб-сайт",
    "Star article" : "Добавить в избранное",
    "Unstar article" : "Убрать из избранного",
    "Keep article unread" : "Оставить статью непрочитанной",
    "Remove keep article unread" : "Удалить отметку от непрочтении",
    "by" : "автор",
    "from" : "из",
    "Play audio" : "Проиграть аудио-запись",
    "Download video" : "Скачать видео",
    "Download audio" : "Скачать аудио-запись",
    "Keyboard shortcut" : "Горячие клавиши",
    "Description" : "Описание",
    "right" : "направо",
    "Jump to next article" : "Перейти на следующую статью",
    "left" : "налево",
    "Jump to previous article" : "Перейти на предыдущую статью",
    "Toggle star article" : "Добавить/убрать из избранного",
    "Star article and jump to next one" : "Добавить статью в избранное и перейти к следующей",
    "Toggle keep current article unread" : "Переключатель прочтения текущей статьи",
    "Open article in new tab" : "Открыть статью в новой вкладке",
    "Toggle expand article in compact view" : "Открыть статью при просмотре в компактном режиме",
    "Load next feed" : "Загрузить следующую ленту",
    "Load previous feed" : "Загрузить предыдущую ленту",
    "Load next folder" : "Загрузить следующий каталог",
    "Load previous folder" : "Загрузить предыдущий каталог",
    "Scroll to active navigation entry" : "Переход к выбранному элементу",
    "Focus search field" : "Сфокусироваться на поле поиска",
    "Mark current article's feed/folder read" : "Пометить папку текущей статьи как прочитанную",
    "Web address" : "Веб адрес",
    "Feed exists already!" : "Лента уже существует!",
    "Folder" : "Каталог",
    "No folder" : "Нет каталога",
    "New folder" : "Новый каталог",
    "Folder name" : "Имя каталога",
    "Go back" : "Вернуться назад",
    "Folder exists already!" : "Каталог уже существует!",
    "New Folder" : "Новый каталог",
    "Create" : "Создать",
    "Explore" : "Исследовать",
    "Update failed more than 50 times" : "Не удалось выполнить обновление более 50 раз",
    "Deleted feed" : "Удалённая лента",
    "Undo delete feed" : "Отменить удаление ленты",
    "Rename" : "Переименовать",
    "Menu" : "Меню",
    "Unpin feed from the top" : "Отсоединить фид сверху",
    "Pin feed to the top" : "Прикрепить фид наверх",
    "No feed ordering" : "Не указан порядок новостных лент",
    "Reversed feed ordering" : "Обратный порядок новостной ленты",
    "Normal feed ordering" : "Обычный порядок новостной ленты",
    "Enable full text feed fetching" : "Включить загрузку полного текста новостной ленты",
    "Disable full text feed fetching" : "Выключить загрузку полного текста новостной ленты",
    "Keep updated articles as is" : "Оставить обновленные статьи как есть",
    "Mark updated articles unread" : "Пометить обновленные статьи как непрочитанные",
    "Rename feed" : "Переименовать ленту",
    "Delete feed" : "Удалить ленту",
    "Mark all articles read" : "Пометить все статьи как прочитанные",
    "Dismiss" : "Прекратить",
    "Collapse" : "Свернуть",
    "Deleted folder" : "Удаленный каталог",
    "Undo delete folder" : "Отменить удаление каталога",
    "Rename folder" : "Переименовать каталог",
    "Delete folder" : "Удалить каталог",
    "Starred" : "Избранное",
    "Unread articles" : "Не прочтённые статьи",
    "All articles" : "Все статьи",
    "Settings" : "Настройки",
    "Keyboard shortcuts" : "Горячие клавиши",
    "Disable mark read through scrolling" : "Отключить установку отметок о прочтении при прокручивании",
    "Compact view" : "Компактный вид",
    "Expand articles on key navigation" : "Раскрывать статьи при навигации клавишами",
    "Show all articles" : "Показать все статьи",
    "Reverse ordering (oldest on top)" : "Обратный порядок (самые старые сверху)",
    "Subscriptions (OPML)" : "Подписки (OPML)",
    "Import" : "Импорт",
    "Export" : "Экспорт",
    "Error when importing: file does not contain valid OPML" : "Ошибка при импорте: файл не содержит правильный OPML",
    "Unread/Starred Articles" : "Непрочтенные/Избранные статьи",
    "Error when importing: file does not contain valid JSON" : "Ошибка при импорте: файл не содержит правильный JSON"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
