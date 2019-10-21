/*
 <span class="tooltipText">Text tooltipa</span>
 */
let allToolTips = document.querySelectorAll('.tooltip');
// console.log(allToolTips);

allToolTips.forEach(function (tooltip) {
    tooltip.addEventListener('mouseover', function(e) {
        let toolTipText = this.dataset.text;
        let span = document.createElement('span');
        span.className = 'tooltipText';
        span.innerText = toolTipText;
        this.appendChild(span);
    })
})

allToolTips.forEach(function (tooltip) {
    tooltip.addEventListener('mouseout', function(e) {
        let span = document.querySelector('.tooltipText');
        this.removeChild(span);
    })
})