export function generateList(itemList) 
{  
    return (
        <ul>
            {itemList.map((item, index) => 
                <li key={'l-' + index.toString()}>{item}</li>
            )}
        </ul>  
    );
}

export const ucFirst = ([ first, ...rest ], locale = navigator.language) => first.toLocaleUpperCase(locale) + rest.join('');