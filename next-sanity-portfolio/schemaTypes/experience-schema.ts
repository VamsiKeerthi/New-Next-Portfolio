const experience = {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'position',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty if currently working here',
    },
    {
      name: 'currentlyWorking',
      title: 'Currently Working Here',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        },
      ],
    },
    {
      name: 'skills',
      title: 'Skills Used',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}

export default experience
