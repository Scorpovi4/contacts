

interface IReqOptions {
  method: string,
  options: {
    mode?: string,
    cache?: string,
    credentials?: string,
    headers?: {
      'Content-Type': string
    },
    redirect?: string,
    referrerPolicy?: string,
    body: BodyInit | null | undefined
  }
}

const req = (url:string, options:IReqOptions) => {
  return fetch(url, options).then((response) => {
    if (response.status !== 200) {
      return response.text().then((text) => {
        throw new Error(text);
      });
    }
    return response.json();
  });
};

export default req

// req(all.php).then(data => {}).catch(err => {})
