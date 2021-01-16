<template>
  <v-container
    id="blog"
    class="pa-0"
    fluid
    tag="section"
  >
    <hero
      class="text-center white--text align-center"
    >
    </hero>

    <v-responsive
      class="mx-auto"
      max-width="1280"
    >
      <v-container>

        <v-row>
          <v-col
            v-for="(post, i) in posts"
            :key="i"
            class="d-flex"
            cols="12"
            md="4"
          >
            <pv-card :post="post" />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </v-container>
</template>

<script>
  export default {
    name: 'Blog',

    components: {
      PvCard: () => import('./components/PvCard'),
      Hero: () => import('./components/Hero'),
      // VFilter: () => import('@/components/Filter'),
    },

    data: () => ({
      posts: [
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Nature',
          date: 'September 18, 2018',
          src: 'https://picsum.photos/id/237/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Cities',
          date: 'September 5, 2018',
          src: 'https://picsum.photos/id/238/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Nature',
          date: 'August 27, 2018',
          src: 'https://picsum.photos/id/239/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Design',
          date: 'August 14, 2018',
          src: 'https://picsum.photos/id/240/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Design',
          date: 'August 14, 2018',
          src: 'https://picsum.photos/id/241/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Branding',
          date: 'August 14, 2018',
          src: 'https://picsum.photos/id/242/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Branding',
          date: 'June 26, 2018',
          src: 'https://picsum.photos/id/243/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Nature',
          date: 'June 26, 2018',
          src: 'https://picsum.photos/id/244/400/200',
          title: 'Lorem ipsum dolor',
        },
        {
          blurb: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam earum ipsa quidem, ipsam adipisci, dolorum ducimus repellat vel sed cum maiores voluptatum enim illum saepe dolor fugit amet laboriosam.',
          category: 'Cities',
          date: 'June 21, 2018',
          src: 'https://picsum.photos/id/232/400/200',
          title: 'Lorem ipsum dolor',
        },
      ],
      tabs: [
        'All',
        'Nature',
        'Cities',
        'Branding',
        'Design',
      ],
    }),
  }
</script>
