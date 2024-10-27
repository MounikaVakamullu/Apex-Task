document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("benefitsButton").addEventListener("click", function() {
        const benefitsInfo = document.getElementById("benefitsInfo");
        if (benefitsInfo.classList.contains('hidden')) {
            benefitsInfo.classList.remove('hidden');
            alert('Benefits of Healthy Eating displayed!');
        } else {
            alert('Benefits of Healthy Eating are already shown.');
        }
    });

    document.getElementById("tipsButton").addEventListener("click", function() {
        const tipsInfo = document.getElementById("tipsInfo");
        if (tipsInfo.classList.contains('hidden')) {
            tipsInfo.classList.remove('hidden');
            alert('Healthy Eating Tips displayed!');
        } else {
            alert('Healthy Eating Tips are already shown.');
        }
    });
});
