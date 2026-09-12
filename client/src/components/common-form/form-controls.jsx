import { Input, SelectItem } from "@base-ui/react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
 } from "../ui/select";

function FormControls(formControls =[], formData, setFormData){
    function renderComponentByType(getControlItem){
        let element= null;
        const currentControlItemValue = formData[getControlItem.name]  || 

        switch(getControlItem.componentType){
            case 'input':
                element=(
                <Input 
                type={getControlItem.type} 
                id={getControlItem.name}
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                value={currentControlItemValue}
                onChange={(event)=> setFormData({
                    ...formData,
                    [getControlItem.name] : event.target.value
                })}
                />
                );
                break;

            case 'select':
                element=(
                <Select 
                onValueChange={(event)=> setFormData({
                    ...formData,
                    [getControlItem.name] : value
                })}
                value={currentControlItemValue}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder={getControlItem.label} />
                        </SelectTrigger>
                        <SelectContent>
                            {
                                getControlItem.options && getControlItem.options.length >0 ? getControlItem.options.map(optionItem=> <SelectItem key={optionItem.id} value={optionItem.id}>{optionItem.label}</SelectItem>) : null
                            }
                            
  </SelectContent>
                </Select>
                );
                break;

            case 'text':
                element=(
                <Textarea 
                id={getControlItem.name}
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                value={currentControlItemValue}
                onChange={(event)=> setFormData({
                    ...formData,
                    [getControlItem.name] : event.target.value
                })}
                />
                );
                break;

            default:
                    case 'input':
                element=(
                <Input 
                id={getControlItem.name}
                name={getControlItem.name}
                placeholder={getControlItem.placeholder}
                value={currentControlItemValue}
                onChange={(event)=> setFormData({
                    ...formData,
                    [getControlItem.name] : event.target.value
                })}
                />
                )
                
                break;

        }
        return element;
    }
    return(
        <div className="flex flex-col gap-3">
            <Label ></Label>
            {
                formControls.map(controlItem=>

                    <div key={controleItem.name}>
                        <Label htmlFor={controleItem.name}>{controleItem.label}
                        </Label>
                        {
                            renderComponentByType(controleItem)
                        }
                    </div>
                )
            }


        </div>

    );
}