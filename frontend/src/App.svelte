<!--<script ✂prettier:content✂="CiAgZXhwb3J0IGxldCBuYW1lOwo=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=" ✂prettier:content✂="e30=">{}</script><main>
  <h1>Hall0 {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main><style ✂prettier:content✂="CiAgbWFpbiB7CiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7CiAgICBwYWRkaW5nOiAxZW07CiAgICBtYXgtd2lkdGg6IDI0MHB4OwogICAgbWFyZ2luOiAwIGF1dG87CiAgfQoKICBoMSB7CiAgICBjb2xvcjogI2ZmM2UwMDsKICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7CiAgICBmb250LXNpemU6IDRlbTsKICAgIGZvbnQtd2VpZ2h0OiAxMDA7CiAgfQoKICBAbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHsKICAgIG1haW4gewogICAgICBtYXgtd2lkdGg6IG5vbmU7CiAgICB9CiAgfQo=" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂="" ✂prettier:content✂=""></style>-->
<script>
  // function showIMWobj() {
  //   fetch('http://localhost:3000/imwObj', {
  //     method: 'GET',
  //     mode: 'no-cors',
  //     // body: 'wtf',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((res) => {
  //       // if (!res.ok) {
  //       //   throw new Error('Failed!');
  //       // }
  //       alert('someWorkzingx!');
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }
  async function showIMWobj() {
    let url = 'http://localhost:3333/imwObj';
    let response = await fetch(url);

    let result = await response.json(); // read response body and parse as JSON

    console.log(`JSON.stringify(result)==> ${JSON.stringify(result)}`);
  }

  async function vInvMasterQuery() {
    let url = 'http://localhost:3333/tsqlHub';
    let response = await fetch(url);

    let result = await response.json(); // read response body and parse as JSON

    console.log(
      // `JSON.stringify(result)==> ${JSON.stringify(result)}`
      `result==> ${result}`
    );

    // console.log(`JSON.stringify(result)==> ${JSON.stringify(result)}`);
    console.log(`JSON.parse(result)==> ${JSON.parse(result)}`);
  }
</script>

<button on:click={showIMWobj}>showIMWobj</button>
<button on:click={vInvMasterQuery}>vInvMasterQuery</button>
