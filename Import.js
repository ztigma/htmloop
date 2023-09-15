window.addEventListener('load', function() 
{
	Start();
});
function Start()
{
    Importar();
}
function Importar()
{
    let w = document.querySelectorAll('[import]');
    w.forEach
    (
        function(n)
        {
            let name = n.getAttribute('import');
            let elemento = document.querySelector(`[export=${name}]`);

            //ATTRIBUTES
            elemento.getAttributeNames().forEach
            (
                function(ttr_name)
                {
                    if(ttr_name == 'import' || ttr_name == 'export' || ttr_name == 'style' || ttr_name == 'child_mode')
                    {
                        return;
                    }

                    let b = n.getAttribute(ttr_name);
                    if(b)
                    {

                    }
                    else
                    {
                        n.setAttribute(ttr_name, elemento.getAttribute(ttr_name));
                    }
                }
            );

            //STYLE
            for(let i = 0; i < elemento.style.length; i++)
            {
                let style_name = elemento.style.item(i);
                console.log(style_name);
                let bs = n.style.getPropertyValue(style_name);
                if(bs)
                {

                }
                else
                {
                    n.style.setProperty(style_name, elemento.style.getPropertyValue(style_name));
                }
            }

            //CHILDREN
            let child_mode = n.getAttribute('child_mode');//add, replace
            if(child_mode)
            {

            }
            else
            {
                child_mode = 'replace';
                n.setAttribute('child_mode', child_mode);
            }
            child_mode = n.getAttribute('child_mode');
            if(child_mode == 'replace')
            {
                
            }
            else if(child_mode == 'add')
            {
                n.innerHTML = elemento.innerHTML + n.innerHTML;
            }
        }
    );
}