// import React from 'react'

function Card({children, title, color='blue'}){ // uses children for datavalue
  const colorClasses = {
    blue: 'border-blue-500 by-blue-500',
    green: 'border-green-500 by-green-500',
    purple: 'border-purple-500 by-purple-500',
    red: 'border-red-500 by-red-500',
  };

  return (
    <div className={`border-l-4 ${colorClasses[color]} p-6 shadow-md`}>
      {title && <h3 className='text-xl font-bold mb-3 text-gray-800'>{title}</h3>}

      <h3>I will now unbreakable</h3>
      <div className="text-gray-700">{children}</div>
    </div>
  )
} 

function Container({children, layout='vertical'}){ // uses children for datavalue
  const layoutClasses = {
    vertical: 'flex flex-col space-y-4',
    horizontal: 'flex flex-row flex-wrap gap-4',
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };
  return <div className={layoutClasses[layout]}>{children}</div>
}


function ChildrenProps() {
  return (
    <section className='p-8 bg-white rounded-xl shadow-lg'>
      <h2>Children Prop</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe molestias sunt numquam repellat, amet aut?</p>
      <div className="space-y-6">
        <div>
          <h3>Card Component with chidren</h3>
          <Container layout="grid">
            <Card title='User Profile' color="blue">
              <p className="mb-2">
                <strong>Name:</strong> Nitish Rai
              </p>
              <p className="mb-2">
                <strong>Email:</strong>NitishRai@something.com
              </p>
              <p className="mb-2">
                <strong>Role:</strong> Developer
              </p>
            </Card>
            <Card title='Statistics' color="green">
              <p className="mb-2">
                <strong>Name:</strong> Rahul
              </p>
              <p className="mb-2">
                <strong>Email:</strong>Rahul@something.com
              </p>
              <p className="mb-2">
                <strong>Role:</strong> Intern 
              </p>
            </Card>

            <Card title='Knowledge Base' color="purple">
              <p className="mb-2">
                <strong>Name:</strong> Mark Z.
              </p>
              <p className="mb-2">
                <strong>Email:</strong>MarkZ@something.com
              </p>
              <p className="mb-2">
                <strong>Role:</strong> Founder at Meta
              </p>
              <button className="px-6 py-2 bg-purple-600 rounded-2xl hover:bg-blue-100 transition-all">Know More</button>
            </Card>
            
          </Container>
        </div>
      </div>
    </section>
  )
}

export default ChildrenProps
