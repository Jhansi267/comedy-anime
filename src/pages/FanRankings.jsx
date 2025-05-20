
import React from 'react';
import {
  Typography, Box, Avatar, Badge, Chip, Divider,
  List, ListItem, ListItemAvatar, ListItemText,
  Card, CardContent, CardMedia, Grid, Container
} from '@mui/material';
import { EmojiEvents, Star, Mood, SentimentVerySatisfied, Groups } from '@mui/icons-material';
import { Row, Col } from 'react-bootstrap';
import './FanRankings.scss';

const FanRankings = () => {
  // Sample data for leaderboards
  const topGagCollectors = [
    { id: 1, name: "LaughMaster3000", avatar: "https://i.pravatar.cc/150?img=1", episodes: 342, rank: 1 },
    { id: 2, name: "JokesterJill", avatar: "https://i.pravatar.cc/150?img=2", episodes: 298, rank: 2 },
    { id: 3, name: "PunnyGuy", avatar: "https://i.pravatar.cc/150?img=3", episodes: 276, rank: 3 },
    { id: 4, name: "ChuckleChamp", avatar: "https://i.pravatar.cc/150?img=4", episodes: 254, rank: 4 },
    { id: 5, name: "GiggleQueen", avatar: "https://i.pravatar.cc/150?img=5", episodes: 231, rank: 5 },
  ];

  const reactionLeaders = [
    { id: 1, name: "ReviewRascal", avatar: "https://i.pravatar.cc/150?img=6", funnyReviews: 128, rank: 1 },
    { id: 2, name: "CriticComedian", avatar: "https://i.pravatar.cc/150?img=7", funnyReviews: 112, rank: 2 },
    { id: 3, name: "LOLCritic", avatar: "https://i.pravatar.cc/150?img=8", funnyReviews: 98, rank: 3 },
    { id: 4, name: "SatireScribe", avatar: "https://i.pravatar.cc/150?img=9", funnyReviews: 87, rank: 4 },
    { id: 5, name: "JokeJudge", avatar: "https://i.pravatar.cc/150?img=10", funnyReviews: 76, rank: 5 },
  ];

  // Sample humor clubs data
  const humorClubs = [
    { 
      id: 1, 
      name: "The Gag Busters", 
      members: 1243, 
      icon: "🎭",
      description: "Dedicated to finding the gags that bust your gut!",
      banner: "/assets/images/comedy2.png"
    },
    { 
      id: 2, 
      name: "Slapstick Society", 
      members: 987, 
      icon: "🤹",
      description: "Where physical comedy reigns supreme Powers!",
      banner:  "/assets/images/comedy2.png"
    },
    { 
      id: 3, 
      name: "Pun Punchers United", 
      members: 1562, 
      icon: "👊",
      description: "We deliver  knockout puns and hits maintain daily!",
      banner:  "/assets/images/comedy2.png"
    },
    { 
      id: 4, 
      name: "Sitcom Scholars", 
      members: 845, 
      icon: "📺",
      description: "Analyzing comedy like it's  bullet rocket's  science !",
      banner:  "/assets/images/comedy2.png"
    },
  ];

  // Theme elements
  const themeElements = {
    badges: ["🎭", "🤡", "🎪", "🍌", "🥧"],
    decorations: ["🎩", "👓", "🎤", "📯", "🎷"],
    awards: ["🏆", "🎖️", "🏅", "🥇", "🌟"]
  };

  return (
    <Container className="fan-rankings-container" sx={{ py: 4 }}>
      {/* Header with themed decorations */}
      <Box sx={{ 
        textAlign: 'center', 
        mb: 4,
        position: 'relative',
        '&::before': {
          content: '"🤡"',
          position: 'absolute',
          left: 20,
          top: -20,
          fontSize: '2rem'
        },
        '&::after': {
          content: '"🎭"',
          position: 'absolute',
          right: 20,
          top: -20,
          fontSize: '2rem'
        }
      }}>
        <Typography variant="h2" component="h1" sx={{ 
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block'
        }}>
          Comedy Community  Ranking Hub
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Where laughter earns you prestige!
        </Typography>
      </Box>

      <Row>
        {/* Leaderboards Section */}
        <Col md={6}>
          <Card sx={{ 
            mb: 4, 
            borderLeft: '6px solid #FFD166',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'visible',
            height: 500, // Fixed height
            '&::before': {
              content: '"🏆"',
              position: 'absolute',
              left: -30,
              top: -20,
              fontSize: '2.5rem',
              zIndex: 1
            }
          }}>
            <CardContent className='shadow-lg' sx={{ height: '100%', display: 'flex', flexDirection: 'column', }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmojiEvents color="primary" sx={{ fontSize: 32, mr: 1 }} />
                <Typography variant="h5" component="h2">
                  Top Gag Collectors
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Most comedy episodes viewed this month
              </Typography>
              
              <Box sx={{ flex: 1, overflow: 'auto' }}>
                <List sx={{ width: '100%' }}>
                  {topGagCollectors.map((user) => (
                    <ListItem key={user.id} sx={{ 
                      py: 1.5,
                      bgcolor: user.rank <= 3 ? 'rgba(255, 215, 0, 0.1)' : 'inherit',
                      borderRadius: '4px',
                      mb: 1
                    }}>
                      <ListItemAvatar>
                        <Badge
                          overlap="circular"
                          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                          badgeContent={
                            <Box sx={{
                              bgcolor: user.rank === 1 ? 'gold' : 
                                       user.rank === 2 ? 'silver' : 
                                       user.rank === 3 ? '#cd7f32' : 'primary.main',
                              color: 'white',
                              width: 24,
                              height: 24,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.75rem',
                              fontWeight: 'bold'
                            }}>
                              {user.rank}
                            </Box>
                          }
                        >
                          <Avatar src={user.avatar} alt={user.name} />
                        </Badge>
                      </ListItemAvatar>
                      <ListItemText 
                        primary={
                          <Typography variant="subtitle1" sx={{ fontWeight: user.rank <= 3 ? 600 : 400 }}>
                            {user.name}
                            {user.rank <= 3 && (
                              <Chip 
                                label={user.rank === 1 ? "Gold" : user.rank === 2 ? "Silver" : "Bronze"} 
                                size="small" 
                                sx={{ 
                                  ml: 1,
                                  bgcolor: user.rank === 1 ? 'gold' : 
                                           user.rank === 2 ? 'silver' : '#cd7f32',
                                  color: 'white',
                                  fontSize: '0.6rem',
                                  height: 18
                                }} 
                              />
                            )}
                          </Typography>
                        } 
                        secondary={`${user.episodes} episodes`} 
                      />
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Star color={user.rank <= 3 ? "warning" : "disabled"} />
                        <Typography variant="body2" sx={{ ml: 0.5 }}>
                          {user.rank <= 3 ? "Elite" : "Rising"}
                        </Typography>
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </CardContent>
          </Card>

          <Card sx={{ 
            borderLeft: '6px solid #06D6A0',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'visible',
            height: 400, // Fixed height
            '&::before': {
              content: '"😂"',
              position: 'absolute',
              left: -30,
              top: -20,
              fontSize: '2.5rem',
              zIndex: 1
            }
          }}>
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Mood color="success" sx={{ fontSize: 32, mr: 1 }} />
                <Typography variant="h5" component="h2">
                  Reaction Kings/Queens
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Funniest user reviews this season
              </Typography>
              
              <Box sx={{ flex: 1, overflow: 'auto' }}>
                <List>
                  {reactionLeaders.map((user) => (
                    <ListItem key={user.id} sx={{ py: 1.5, mb: 1 }}>
                      <ListItemAvatar>
                        <Badge
                          overlap="circular"
                          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                          badgeContent={
                            <Box sx={{
                              bgcolor: 'primary.main',
                              color: 'white',
                              width: 24,
                              height: 24,
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.75rem',
                              fontWeight: 'bold'
                            }}>
                              {user.rank}
                            </Box>
                          }
                        >
                          <Avatar src={user.avatar} alt={user.name} />
                        </Badge>
                      </ListItemAvatar>
                      <ListItemText 
                        primary={
                          <Typography variant="subtitle1">
                            {user.name}
                            <Chip 
                              label="Funny" 
                              size="small" 
                              color="success" 
                              sx={{ ml: 1, fontSize: '0.6rem', height: 18 }} 
                              icon={<SentimentVerySatisfied fontSize="small" />}
                            />
                          </Typography>
                        } 
                        secondary={`${user.funnyReviews} hilarious reviews`} 
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </CardContent>
          </Card>
        </Col>

        {/* Humor Clubs Section */}
        <Col md={6}>
          <Card sx={{ 
            mb: 4, 
            bgcolor: '#FFF8E1', 
            border: '2px dashed #FFC107',
            height: 500 // Fixed height to match Top Gag Collectors
          }}>
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Groups color="secondary" sx={{ fontSize: 32, mr: 1 }} />
                <Typography variant="h5" component="h2">
                  Featured Humor Clubs
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Join a community that matches your comedy style!
              </Typography>

              <Box sx={{ flex: 1, overflow: 'auto' }}>
                <Grid container spacing={2}>
                  {humorClubs.map((club) => (
                    <Grid item xs={12} sm={6} key={club.id}>
                      <Card sx={{ 
                        height: 280, // Fixed height for all club cards
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        width: '100%',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: 3,
                          transition: 'all 0.3s ease'
                        }
                      }}>
                        <CardMedia
                          component="img"
                          height="140" // Fixed image height
                          image={club.banner}
                          alt={club.name}
                          sx={{ objectFit: 'cover' }}
                        />
                        <Box sx={{
                          position: 'absolute',
                          top: 10,
                          left: 10,
                          bgcolor: 'rgba(255, 255, 255, 0.8)',
                          px: 1,
                          borderRadius: '50%',
                          fontSize: '1.5rem'
                        }}>
                          {club.icon}
                        </Box>
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h6" component="h3" noWrap>
                            {club.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ 
                            mb: 1,
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>
                            {club.description}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
                            <Chip 
                              label={`${club.members} members`} 
                              size="small" 
                              color="primary" 
                              variant="outlined"
                              sx={{ mr: 1 }}
                            />
                            <Chip 
                              label="Join" 
                              size="small" 
                              color="secondary" 
                              clickable
                            />
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </CardContent>
          </Card>

          {/* Themed Badges Section */}
          <Card sx={{ 
            bgcolor: '#E3F2FD',
            border: '2px dotted #2196F3',
            position: 'relative',
            height: 400, // Fixed height to match Reaction Kings/Queens
            '&::before': {
              content: '""',
              position: 'absolute',
              right: 20,
              top: -20,
              fontSize: '2rem',
              zIndex: 1
            }
          }}>
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
                Collectible Comedy Badges
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Earn these hilarious badges by participating!
              </Typography>

              <Box sx={{ flex: 1, overflow: 'auto' }}>
                <Box sx={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: 2,
                  justifyContent: 'center',
                  minHeight: 120
                }}>
                  {themeElements.badges.map((badge, index) => (
                    <Box key={index} sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      p: 2,
                      bgcolor: 'white',
                      borderRadius: '8px',
                      boxShadow: 1,
                      width: 80,
                      height: 80,
                      justifyContent: 'center',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)',
                        transition: 'all 0.3s ease'
                      }
                    }}>
                      <Typography variant="h4">{badge}</Typography>
                      <Typography variant="caption" sx={{ 
                        mt: 1, 
                        textAlign: 'center',
                        lineHeight: 1.2,
                        fontSize: '0.7rem'
                      }}>
                        {["Gag Master", "Clown Royalty", "Jester Elite", "Banana Slip", "Pie Face"][index]}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Col>
      </Row>

      {/* Decorative Footer */}
      <Box sx={{ 
        mt: 4,
        py: 2,
        textAlign: 'center',
        borderTop: '1px dashed #ccc',
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        width: '100%'
      }}>
        {themeElements.decorations.map((decoration, index) => (
          <Box key={index} sx={{
            animation: 'bounce 2s infinite ease-in-out',
            animationDelay: `${index * 0.2}s`,
            fontSize: '1.5rem',
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' }
            }
          }}>
            {decoration}
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default FanRankings;


