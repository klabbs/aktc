export const useModal = () => {
    const [modal, setModal] = useState(null);
  
    const showModal = (data) => setModal(data);
  
    const hideModal = () => setModal(null);
  
    return {
      modal,
      showModal,
      hideModal
    };
};