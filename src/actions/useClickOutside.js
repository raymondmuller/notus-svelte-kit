export default function useClickOutside(element, callbackFn) {

    function onClick(event) {
        if (!element.contains(event.target)) {
            callbackFn();
        }

    }

    document.body.addEventListener('click', onClick);

    return {
        update(newCallbackFn) {
            callbackFn = newCallbackFn;
        },
        destroy() {
            document.body.removeEventListener('click', onClick);
        }
    }

}