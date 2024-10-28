figma.showUI(__html__);

figma.ui.onmessage = msg =>{
    if(msg.type === 'runPlugin'){
    //     const rect = figma.createRectangle();
    //     rect.resize(150,150);
    //     rect.fills = [{type:'SOLID',color:{r:0,g:0,b:0}}];
    //     rect.cornerRadius=4;
    //     figma.currentPage.appendChild(rect);
    // }
    for (const node of figma.currentPage.selection){
        //console.log(node.type);
        for(let i=1;i<=9; i++){
            const duplicate = node.clone();
        duplicate.x = node.x + node.width + 150;
        if("opacity" in duplicate)
        duplicate.opacity = 0.9;
        }
        
    }
    // else if(msg.type==='createEllipse'){
    //     if(msg.type === 'createEllipse'){
    //         const ellipse = figma.createEllipse();
    //         ellipse.resize(150,150);
    //         ellipse.fills = [{type:'SOLID',color:{r:0,g:0,b:0}}];
    //         //ellipse.cornerRadius=4;
    //         figma.currentPage.appendChild(ellipse);
    // }
    else if(msg.type === 'exitPlugin'){
        figma.closePlugin();
    }
}
}