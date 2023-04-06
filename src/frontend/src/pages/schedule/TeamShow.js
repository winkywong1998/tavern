import React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {blueGrey} from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TeamShow = ({Teams, meetingType}) => {

    const ExpandMore = styled((props) => {
        const {expand, ...other} = props;
        return <IconButton {...other} />;
    })(({theme, expand}) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div style={{marginLeft: '10%', 'width': "80%"}}>
            {meetingType === 0 ?
                <div className="row">
                    {Teams && Teams.map(team => {
                        return (
                            <div className="col-md-4 mb-5" key={team.id} style={{
                                textAlign: 'center',
                                padding: '1%', marginLeft: '0px', marginRight: '0px', width: '33.33%'
                            }}>
                                <div className="card h-100">
                                    <Card sx={{maxWidth: 345}}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{bgcolor: blueGrey[500]}} aria-label="recipe">
                                                    {team.lname.charAt(0)}
                                                </Avatar>
                                            }
                                            title={
                                                <span style={{fontSize: '18pt'}}>
                                                    {team.fname} {team.lname}
                                                </span>
                                            }
                                        />
                                    </Card>
                                </div>
                            </div>
                        )
                    })}
                </div> :
                <div className="row">
                    {Teams && Teams.map(team => {
                        const cardTitle = "Group ID: " + team.id
                        return (
                            <div className="col-md-4 mb-5" key={team.id} style={{
                                textAlign: 'center',
                                padding: '1%', marginLeft: '0px', marginRight: '0px', width: '33.33%'
                            }}>
                                <div className="card h-100">
                                    <Card sx={{maxWidth: 345}}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{bgcolor: blueGrey[500]}} aria-label="recipe">
                                                    {team.id}
                                                </Avatar>
                                            }
                                            title={
                                                <span style={{fontSize: '18pt'}}>
                                            {cardTitle}
                                        </span>
                                            }
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                Click to View More
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <ExpandMore
                                                expand={expanded}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon/>
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography paragraph
                                                            style={{fontSize: '15pt'}}>{team.numOfMember} Members:</Typography>
                                                <div>
                                                    {team.member && team.member.map(m => (
                                                            <Typography paragraph>
                                                                <div style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'row',
                                                                    alignItems: 'center'
                                                                }}>
                                                                    <Avatar sx={{bgcolor: blueGrey[300]}}
                                                                            style={{marginRight: '20%'}}
                                                                            aria-label="recipe">
                                                                        {m.lname.charAt(0)}
                                                                    </Avatar>
                                                                    <span>
                                                                {m.fname} {m.lname}
                                                            </span>
                                                                </div>
                                                            </Typography>
                                                        )
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </div>
                            </div>
                        )
                    })}
                </div>}

        </div>
    );
};

export default TeamShow;