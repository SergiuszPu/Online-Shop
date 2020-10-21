const Product = require('./models/product.model');


const loadTestData = async () => {

  const data = [
    {
      id: '1234a',
      tag: 'new',
      img: { src:'../../../images/1.jpg'},
      name: 'Canyon Sender CFR',
      price: 26666.00,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '2234b',
      tag: 'last one',
      img: { src:'../../../images/2.jpg'},
      name: 'Canyon Sender CFR',
      price: 26666.00,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '3234c',
      tag: 'new',
      img: { src:'../../../images/2.jpg'},
      name: 'Canyon Sender CFR',
      price: 26666.00,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '4234d',
      tag: '',
      img: { src:'../../../images/1.jpg'},
      name: 'Canyon Sender CFR',
      price: 26666.00,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '5234e',
      tag: '',
      img: { src: '../../../images/2.jpg'},
      name: 'Canyon Sender CFR',
      price: 26666.00,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '6234g',
      tag: '',
      img: { src: '../../../images/2.jpg'},
      name: 'Canyon Sender CFR',
      price: 26666.00,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '7234a',
      tag: '',
      img: { src: '../../../images/1.jpg'},
      name: 'Canyon Sender CFR',
      price: 359.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '8234a',
      tag: '',
      img: { src: '../../../images/2.jpg'},
      name: 'Canyon Sender CFR',
      price: 17297.0,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '9234a',
      tag: '',
      img: { src: '../../../images/2.jpg'},
      name: 'Canyon Sender CFR',
      price: 1729.00,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '10234a',
      tag: '',
      img: { src: '../../../images/2.jpg'},
      name: 'Yt',
      price: 1785.00,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '11234a',
      tag: '',
      img: { src: '../../../images/2.jpg'},
      name: 'Yt',
      price: 1099.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
    {
      id: '122341',
      tag: '',
      img: { src: '../../../images/1.jpg'},
      name: 'Yt',
      price: 38999.99,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in neque id dolor egestas rutrum. Vivamus ullamcorper tincidunt sapien, eu lobortis quam dictum et. Praesent faucibus aliquet consectetur. Etiam tincidunt cursus sapien sed placerat. Vestibulum purus magna, convallis quis leo ac, luctus congue arcu. Mauris volutpat est in elementum sagittis.',
    },
  ];

  try {
    let counter = await Product.countDocuments();
    if(counter === 0) {
      console.log('No products. Loading data...');
      await Product.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log('Couldn\'t load test data', err);
  }

};

module.exports = loadTestData; 