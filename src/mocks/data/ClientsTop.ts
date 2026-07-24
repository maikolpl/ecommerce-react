export type ClientTop ={
    id:string,
    img:string,
    companyName:string,
    email:string,
    money:string,
}

export const clientsTop: ClientTop[] =[
    {
        id:'1',
        img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
        companyName:'Apple Inc.',
        email: 'procurement@apple.com',
        money: '$150,250.00'
    },
    {
        id:'2',
        img:'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
        companyName:'Microsoft Corp.',
        email:'billing@microsoft.com',
        money:'$124,800.00'
    },
    {
        id:'3',
        img:'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        companyName:'Google LLC',
        email:'enterprise@google.com',
        money:'$98,450.50'
    },
    {
        id:'4',
        img:'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        companyName:'Amazon.com Inc',
        email:'vendor@amazon.com',
        money:'$85,100.00'
    },
    {
        id:'5',
        img:'https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg',
        companyName:'NVIDIA Corp.',
        email:'account@nvidia.com',
        money:'$76,900.00'
    }
]
    
