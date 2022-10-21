import chamomileImage from "../../pictures/chamomile.jpg";
import dandelionImage from "../../pictures/dandelion.jpg";
import meadowsweetImage from "../../pictures/meadowsweet.jpg";
import nettleImage from "../../pictures/nettle.jpg";
import violetImage from "../../pictures/violet.jpg";


const ListOfProducts = () => {

    const chamomileInfo = () => {
        return(
            "One of the most widely recognized herbs, Chamomile can be found in most homes. It’s most common use is a sleep aid and relaxative, but along with other benefits, it can be used to reduce menstrual pain, lower blood sugar in people with diabetes, and reduce inflammation. While the average tea bag contains these benefits, they’re more noticeable in stronger brews, which can be made by steeping the flowers directly."
        );
    };
    const chamomilePrecautions = () => {
        return(
            "Care should be used with any herbal product, especially for those who are pregnant, nursing, or on medication. It’s advised to check with your doctor before use."
        );
    };
    

    const dandelionInfo = () => {
        return(
            "Dandelion is usually seen as just another wildflower, or as one of the more difficult plants to keep out of a lawn or garden. If eaten however, and especially when concentrated as a tea, its effects include acting as a diuretic, fighting the common flu, and potentially reducing liver damage and lowering cholesterol. Though it can be found anywhere, the dried herb provided here is guaranteed free of pesticides or any other contaminant."
        );
    };
    const dandelionPrecautions = () => {
        return(
            "Some people are allergic to dandelion and its relatives, and caution, especially among those pregnant, nursing, or on medications is recommended. We recommend you consult with your doctor before use."
        );
    };


    const meadowsweetInfo = () => {
        return(
            "Meadowsweet is a member of the rose family, and apart from its sweet and pleasant scent, is mostly known for its use in mead-making. In older times it was often spread around a house in order to freshen it, and as well as mead it flavored wines and vinegars. Its medicinal uses, when made into a tea or tincture, include reducing joint pain, acting as a diuretic, reducing inflammation, and potentially easing heartburn."
        );
    };
    const meadowsweetPrecautions = () => {
        return(
            "People sensitive to aspirin or other salicylate containing drugs should be cautious, as well as any who are pregnant, nursing, or on any type of medication. We recommend you consult with your doctor before use."
        );
    };


    const nettleInfo = () => {
        return(
            "Nettle is one of the stranger herbs. It seems at first only a nuisance best avoided, but beneath the surface it has uses and benefits in plenty. One which may seem paradoxical is that if a nettle touches a painful area of the body, the original pain will actually decrease. An explanation is that the nettle reduces the amount of inflammation in the area and disrupts the nervous system’s transmission of pain signals back and forth. Beyond this, it’s used to treat general allergies, insect bites, hay fever, joint pain and sprains, and urinary tract infections, as well as the early stages of benign prostatic hyperplasia (BPH). Also it can be made into a slightly alcoholic beer with a good amount of the effects listed present."
        );
    };
    const nettlePrecautions = () => {
        return(
            "Diabetics and any who are nursing, pregnant, or on medication should be cautious. Never apply nettle to an open wound, or attempt to self treat BPH with it. We recommend you consult your doctor before use."
        );
    };


    const violetInfo = () => {
        return(
            "Violet is viewed by most as an ornamental plant, something to bring a little color to a bed or garden. While it’s certainly beautiful, its uses go beyond that. Some of these include the relief of respiratory diseases such as bronchitis and children’s coughs, pain relief, particularly for headaches, and an effective sleep aid. While we recommend taking the herb as a tea, the leaves and flowers can also be rehydrated and eaten."
        );
    };
    const violetPrecautions = () => {
        return(
            "People who are nursing, pregnant, or on medication should be cautious. We recommend you consult your doctor before use."
        );
    };


    
    return (
        [
            {
                id: 'p1',
                name: 'Chamomile',
                description: 'The best friend',
                info: chamomileInfo(),
                precautions: chamomilePrecautions(),
                price: 4.2,
                herbImg: chamomileImage,
            },
            {
                id: 'p2',
                name: 'Dandelion',
                description: 'The multifunctional weed',
                info: dandelionInfo(),
                precautions: dandelionPrecautions(),
                price: 3.2,
                herbImg: dandelionImage,
            },
            {
                id: 'p3',
                name: 'Meadowsweet',
                description: 'The sweet viking',
                info: meadowsweetInfo(),
                precautions: meadowsweetPrecautions(),
                price: 4.3,
                herbImg: meadowsweetImage,
            },
            {
                id: 'p4',
                name: 'Nettle',
                description: 'The feared friend',
                info: nettleInfo(),
                precautions: nettlePrecautions(),
                price: 2.9,
                herbImg: nettleImage,
            },
            {
                id: 'p5',
                name: 'Violet',
                description: 'The powerfull little helper',
                info: violetInfo(),
                precautions: violetPrecautions(),
                price: 4.4,
                herbImg: violetImage,
            },
        ]
    );

};

export default ListOfProducts;