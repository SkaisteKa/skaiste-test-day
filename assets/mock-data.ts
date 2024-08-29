export const MOCK_DATA = {
  data: {
    name: 'test-day',
    slug: 'test-day',
    questions: [
      {
        type: 'single',
        options: [
          { label: 'Losing Weight', value: 'losing_weight' },
          {
            label: 'Improve specific body areas',
            value: 'improve_specific_body_areas'
          },
          { label: 'Gain Muscle', value: 'gain_muscle' },
          { label: 'Develop Healthy Habits', value: 'develop_healthy_habits' }
        ],
        label: 'What is your primary goal?',
        key: 'primary_goal'
      },
      {
        type: 'multiple',
        options: [
          {
            label: 'Breast form',
            value: 'breast_form'
          },
          {
            label: 'Arms',
            value: 'arms'
          },
          {
            label: 'Belly',
            value: 'belly'
          },
          {
            label: 'Buttocks',
            value: 'buttocks'
          },
          {
            label: 'Legs and Thighs',
            value: 'legs_and_thighs'
          }
        ],
        label: 'Select body areas you would like to improve:',
        description: 'Select all that apply.',
        key: 'body_areas'
      },
      {
        type: 'single',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' }
        ],
        label: 'Do you suffer from back pain?',
        key: 'back_pain'
      },
      {
        type: 'multiple',
        options: [
          { label: 'Anxiety or depression', value: 'anxiety_or_depression' },
          { label: 'Face skin problems', value: 'face_skin_problems' },
          { label: 'Weak hair or hair loss', value: 'weak_hair_or_hair_loss' },
          { label: 'Weak nails', value: 'weak_nails' },
          {
            label: 'Loose skin or strech marks',
            value: 'loose_skin_or_strech_marks'
          },
          {
            label: 'None of the above',
            value: 'none_of_the_above',
            custom: { deselectAll: true }
          }
        ],
        label: 'Concerns you have faced after pregnancy:',
        description: 'Select all that apply.',
        key: 'concerns'
      },
      {
        type: 'single',
        options: [
          { label: 'I would love to!', value: 'i_would_love_to' },
          { label: 'I would like to try', value: 'i_would_like_to_try' },
          { label: 'I am better on my own', value: 'i_am_better_on_my_own' }
        ],
        label: 'How do you feel about excercising with your baby?',
        key: 'excercising'
      },
      {
        type: 'single',
        options: [
          {
            label: 'Yes',
            value: 'yes'
          },
          {
            label: 'No',
            value: 'no'
          },
          { label: 'Not sure', value: 'not_sure' }
        ],
        label: 'Do you suffer from DIASTASIS RECTI ?',
        description:
          'Diastasis recti is the partial or complete separation of the rectus abdominis, or muscles, which meet at the midline of your stomach.',
        key: 'diastasis_recti'
      },
      {
        type: 'multiple',
        options: [
          {
            label: 'Flexibility',
            value: 'flexibility'
          },
          {
            label: 'Aerobic',
            value: 'aerobic'
          },
          {
            label: 'Strength',
            value: 'strength'
          },
          {
            label: 'Others',
            value: 'others'
          },
          {
            label: 'I don\u2019t like workouts',
            value: 'i_do_not_like_workouts',
            custom: { deselectAll: true }
          }
        ],
        label: 'Select type of workouts you like:',
        description: 'Select all that apply.',
        key: 'workouts'
      },
      {
        type: 'single',
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' }
        ],
        label: 'Are you currently breasfeeding?',
        key: 'breastfeeding'
      },
      {
        type: 'info',
        label: 'Did you know?',
        description:
          'Low impact exercises are completely safe during breastfeeding and do not affect the milk supply or taste.',
        key: 'info_block'
      },
      {
        type: 'multiple',
        options: [
          {
            label: 'Lactose',
            value: 'lactose'
          },
          {
            label: 'Eggs',
            value: 'eggs'
          },
          {
            label: 'Nuts',
            value: 'nuts'
          },
          {
            label: 'Soy',
            value: 'soy'
          },
          {
            label: 'Gluten',
            value: 'gluten'
          },
          {
            label: 'Fish',
            value: 'fish'
          },
          {
            label: 'Shellfish',
            value: 'shellfish'
          },
          {
            label: 'None of the Above',
            value: 'none',
            custom: { deselectAll: true }
          }
        ],
        label: 'What kind of allergies do you have?',
        description: 'Select all that apply.',
        key: 'allergies'
      }
    ]
  }
};
