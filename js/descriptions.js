$('projList'.get(0)).qtip({
    content: 'An example tooltip',
    position: {
        my: 'top left', 
        at: 'bottom right'
    },
    show: 'click',
    hide: 'click',
    style: {
        tip: true,
        classes: 'ui-tooltip-red'
    }
});
