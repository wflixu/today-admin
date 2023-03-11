import type { MenuItem } from "@/stores/system";



export function treeFindNode(data: MenuItem[], id:string): MenuItem | null {
    let res = null;

    for (const node of data) {
        if(node.id == id) {
            res = node;
            break;
        }else if (Array.isArray(node.children)) {
            res = treeFindNode(node.children, id);
        }
    }
    return res
}
export function treeFindPath(data: MenuItem[], id:string, startPath = ''):string{
    let res = '';
    for (const node of data) {
        res = startPath +  node.location;
        if(node.id == id) {
            break;
        }else if (Array.isArray(node.children)) {
            res = treeFindPath(node.children, id,res);
        }
    }
    return res
}