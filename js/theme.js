   // Interactive Category Filter for Examples
        document.addEventListener('DOMContentLoaded', function () {
            const filterButtons = document.querySelectorAll('.btn-filter');
            const items = document.querySelectorAll('.portfolio-item');

            filterButtons.forEach(button => {
                button.addEventListener('click', function () {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');

                    const filterValue = this.getAttribute('data-filter');

                    items.forEach(item => {
                        const itemCategory = item.getAttribute('data-category');
                        if (filterValue === 'all' || itemCategory === filterValue) {
                            item.classList.remove('example-item-hidden');
                        } else {
                            item.classList.add('example-item-hidden');
                        }
                    });
                });
            });
        });