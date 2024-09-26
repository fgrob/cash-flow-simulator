export function createPagination({ data, rowsPerPage, paginationContainerId, renderRows }){
    let currentPage = 1;
    const paginationDiv = document.getElementById(paginationContainerId)
    
    function renderTable(page) {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const paginatedData = data.slice(start, end);

        renderRows(paginatedData);  
    }

    function renderPagination() {
        paginationDiv.innerHTML = '';
        const totalPages = Math.ceil(data.length / rowsPerPage);

        // previous page button
        const prevButton = document.createElement('button');
        prevButton.textContent = 'Previous';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1){
                currentPage--;
                updateTableAndPagination();
            }
        });
        paginationDiv.appendChild(prevButton);

        // page number button
        for (let i = 1; i <= totalPages; i++){
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            if (i === currentPage){
                pageButton.disabled = true;
            }
            pageButton.addEventListener('click', () => {
                currentPage = i;
                updateTableAndPagination();
            });
            paginationDiv.appendChild(pageButton);
        }

        // next page button
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages){
                currentPage++;
                updateTableAndPagination();
            }
        });
        paginationDiv.appendChild(nextButton);
    }

    function updateTableAndPagination() {
        renderTable(currentPage);
        renderPagination();
    }

    updateTableAndPagination();
}