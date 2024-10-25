figma.showUI(__html__);

figma.ui.onmessage = msg =>{
    if(msg.type === 'applyOpacity'){

    }else if(msg.type === 'exitPlugin'){
        figma.closePlugin();
    }
}