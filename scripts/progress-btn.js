document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('completeBtn');
    if(!btn) return;

    const taskId = btn.dataset.taskId;

    function refreshBtn() {
        const done = localStorage.getItem( taskId ) === 'true';
        btn.textContent = done ? '↩️ Desmarcar este día' : '\u{2705} Marcar Día como completado';
        btn.classList.toggle('done', done);
    }

    btn.addEventListener('click', () => {
        const done = localStorage.getItem(taskId) === 'true';
        if(done) {
            localStorage.removeItem(taskId);
        } else {
            localStorage.setItem(taskId, 'true');
        }
        refreshBtn();
    });
    refreshBtn();
})