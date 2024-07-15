const certifications = {
  name: 'certifications',
  title: 'Certifications',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Certification Name',
      type: 'string',
    },
    {
      name: 'issuer',
      title: 'Issued By',
      type: 'string',
    },
    {
      name: 'issued',
      title: 'Issued Date',
      type: 'date',
    },
    {
      name: 'url',
      title: 'URL',
      type: 'url',
    },
    {
      name: 'image',
      title: 'Certificate Image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
  ],
}

export default certifications
