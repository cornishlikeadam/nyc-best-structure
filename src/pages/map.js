import Head from 'next/head';

export default function MapPage() {
  return (
    <>
      <Head>
        <title>NYC Best Structure — Interactive Map</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`body { margin: 0; padding: 0; overflow: hidden; }`}</style>
      </Head>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}>
        <iframe
          src="/map.html"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="NYC Best Structure Interactive Map"
        />
      </div>
    </>
  );
}
