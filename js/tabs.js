document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.how-we-work__button').forEach(function (el) {
        el.addEventListener('click', function (el) {
            const tab = el.currentTarget.dataset.path;
            document.querySelectorAll('.tab-content').forEach(function(el) {
                el.classList.remove('tab-content--active')
            });
                document.querySelector(`[data-target='${tab}']`).classList.add('tab-content--active');
        });

        el.addEventListener('click', function (el) {
            const tabDefault = el.currentTarget.dataset.default;
            document.querySelectorAll('.how-we-work__button').forEach(function(el) {
                el.classList.remove('how-we-work__button--default')
            });
                document.querySelector(`[data-path='${tabDefault}']`).classList.add('how-we-work__button--default');
        });

    });
});